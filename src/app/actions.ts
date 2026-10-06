"use server";

import { headers } from "next/headers";
import { investmentRanges, tradingSegments } from "@/lib/site";

export type SubmitResult = { ok: true } | { ok: false; error: string };

const NOT_SAVED = "Sorry, we could not send your details. Please call or email us instead.";
const TOO_MANY = "Too many submissions from this connection. Please try again later.";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MIN_FILL_MS = 2_000;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

// Simple per-process memory. Enough to stop basic flooding; it resets when the server restarts.
const submissions = new Map<string, number[]>();

async function clientKey() {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || headerList.get("x-real-ip") || "unknown";
}

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs);
  submissions.set(key, recent);
  if (recent.length >= RATE_LIMIT.max) return true;
  recent.push(now);
  if (submissions.size > 5_000) submissions.clear();
  return false;
}

/** Bots usually submit instantly and love links, so both are treated as spam. */
function looksAutomated(formData: FormData, text = "") {
  if (formData.get("botcheck")) return true;

  const elapsed = Number(formData.get("elapsed_ms"));
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return true;

  return (text.match(/https?:\/\//gi)?.length ?? 0) > 2;
}

function field(formData: FormData, name: string, maxLength = 200) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function submitEnquiry(formData: FormData): Promise<SubmitResult> {
  const data = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    phone: field(formData, "phone"),
    subject: field(formData, "subject"),
    segment: field(formData, "segment"),
    investment: field(formData, "investment"),
    package: field(formData, "package"),
  };

  // Pretend it worked so a bot does not learn what gave it away.
  if (looksAutomated(formData, `${data.name} ${data.subject}`)) return { ok: true };

  const valid =
    data.name &&
    data.subject &&
    EMAIL_PATTERN.test(data.email) &&
    /^[0-9]{10}$/.test(data.phone) &&
    tradingSegments.includes(data.segment) &&
    investmentRanges.includes(data.investment);
  if (!valid) return { ok: false, error: "Please fill in all fields correctly." };

  if (rateLimited(await clientKey())) return { ok: false, error: TOO_MANY };
  return saveToGoogleSheet("enquiry", data);
}

export async function submitMessage(formData: FormData): Promise<SubmitResult> {
  const data = {
    name: field(formData, "name"),
    last_name: field(formData, "last_name"),
    email: field(formData, "email"),
    message: field(formData, "message", 2000),
  };

  if (looksAutomated(formData, data.message)) return { ok: true };

  if (!EMAIL_PATTERN.test(data.email) || !data.message) {
    return { ok: false, error: "Please enter a valid email and a message." };
  }

  if (rateLimited(await clientKey())) return { ok: false, error: TOO_MANY };
  return saveToGoogleSheet("message", data);
}

async function saveToGoogleSheet(
  form: "enquiry" | "message",
  data: Record<string, string>,
): Promise<SubmitResult> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEETS_SECRET;
  if (!url || !secret) {
    console.error("Form not saved: set GOOGLE_SHEETS_WEBHOOK_URL and GOOGLE_SHEETS_SECRET in .env.local");
    return { ok: false, error: NOT_SAVED };
  }

  const referer = (await headers()).get("referer");
  const page = referer && URL.canParse(referer) ? new URL(referer).pathname : "";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, form, page, secret }),
      signal: AbortSignal.timeout(15_000),
    });
    const result: { ok?: boolean; error?: string } = await response.json();
    if (!result.ok) throw new Error(result.error ?? `HTTP ${response.status}`);
    return { ok: true };
  } catch (error) {
    console.error("Saving form to Google Sheets failed:", error);
    return { ok: false, error: NOT_SAVED };
  }
}
