"use client";

import { useSyncExternalStore } from "react";
import type { MarketSnapshot } from "@/lib/market";

const REFRESH_MS = 60_000;

let snapshot: MarketSnapshot | null = null;
let timer: ReturnType<typeof setInterval> | undefined;
const listeners = new Set<() => void>();

async function refresh() {
  try {
    const response = await fetch("/api/market", { cache: "no-store" });
    if (response.ok) snapshot = await response.json();
  } catch {
    // Keep showing the last good data while offline.
  }
  listeners.forEach((listener) => listener());
}

// One shared poller for every market widget on the page; it stops when none are mounted.
function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    void refresh();
    timer = setInterval(() => {
      if (document.visibilityState === "visible") void refresh();
    }, REFRESH_MS);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) clearInterval(timer);
  };
}

export function useMarket() {
  return useSyncExternalStore(subscribe, () => snapshot, () => null);
}

const priceFormat = new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const formatPrice = (value: number) => priceFormat.format(value);

export function formatChange(change: number, percent: number) {
  const sign = change >= 0 ? "+" : "−";
  return `${sign}${priceFormat.format(Math.abs(change))} (${sign}${Math.abs(percent).toFixed(2)}%)`;
}
