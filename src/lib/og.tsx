import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { Locale } from "./i18n";
import { site } from "./site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (name: string) => readFile(path.join(process.cwd(), "src", "assets", "fonts", name));

type Options = { title: string; kicker: string; locale: Locale };

// The image generator cannot shape Devanagari correctly, so Hindi pages get a brand card instead.
// Their share preview still shows the Hindi page title, which comes from the page metadata.
const DEVANAGARI = /[\u0900-\u097f]/;

/** Branded picture shown when a page is shared on WhatsApp, Facebook or X. */
export async function shareImage({ title, kicker, locale }: Options) {
  const font = await fontFile("inter-700.ttf");
  const readable = !DEVANAGARI.test(`${title}${kicker}`);
  const heading = readable ? title : site.tagline;
  const label = readable ? kicker : "Stock market advisory";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #05070d 0%, #0a1a14 55%, #06202b 100%)",
          color: "#ffffff",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#3dff7a" }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#3dff7a" }} />
          {site.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 2, textTransform: "uppercase", color: "#94a3b8" }}>{label}</div>
          <div style={{ marginTop: 20, fontSize: heading.length > 70 ? 56 : 68, lineHeight: 1.15 }}>{heading}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#94a3b8" }}>
          <span>{site.url.replace("https://", "")}</span>
          <span>{locale === "hi" ? "Hindi" : "English"}</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Inter", data: font, weight: 700, style: "normal" }] },
  );
}
