import { marketIndices } from "@/lib/site";

export type MarketIndex = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  previousClose: number;
  dayHigh: number;
  dayLow: number;
  points: number[];
};

export type MarketSnapshot = {
  indices: MarketIndex[];
  open: boolean;
  updatedAt: number;
};

type ChartResponse = {
  chart?: {
    result?: {
      meta: {
        regularMarketPrice: number;
        previousClose?: number;
        chartPreviousClose?: number;
        regularMarketDayHigh?: number;
        regularMarketDayLow?: number;
        currentTradingPeriod?: { regular?: { start: number; end: number } };
      };
      timestamp?: number[];
      indicators: { quote: { close?: (number | null)[] }[] };
    }[];
  };
};

const IST_OFFSET_SECONDS = 5.5 * 60 * 60;
const tradingDay = (unixSeconds: number) => Math.floor((unixSeconds + IST_OFFSET_SECONDS) / 86_400);

// Free, unofficial Yahoo Finance endpoint. Swap this function for a licensed data feed before a commercial launch.
async function fetchIndex(symbol: string, name: string) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=5d&interval=5m`;
  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    next: { revalidate: 60 },
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) return null;

  const result = ((await response.json()) as ChartResponse).chart?.result?.[0];
  if (!result) return null;

  const { meta } = result;
  const timestamps = result.timestamp ?? [];
  const closes = result.indicators.quote[0]?.close ?? [];

  // The 5-day range always contains the latest session, even before today's market opens.
  // Holidays show up as days with empty prices, so the session is taken from the last real price.
  let lastIndex = closes.length - 1;
  while (lastIndex >= 0 && closes[lastIndex] == null) lastIndex--;
  const lastDay = lastIndex >= 0 ? tradingDay(timestamps[lastIndex]) : -1;
  const points: number[] = [];
  let earlierSessionClose: number | undefined;
  timestamps.forEach((timestamp, i) => {
    const close = closes[i];
    if (close == null) return;
    if (tradingDay(timestamp) === lastDay) points.push(close);
    else earlierSessionClose = close;
  });

  const price = meta.regularMarketPrice;
  const previousClose = meta.previousClose ?? earlierSessionClose ?? meta.chartPreviousClose ?? price;
  const session = meta.currentTradingPeriod?.regular;
  const now = Date.now() / 1000;

  const index: MarketIndex = {
    symbol,
    name,
    price,
    change: price - previousClose,
    changePercent: previousClose ? ((price - previousClose) / previousClose) * 100 : 0,
    previousClose,
    dayHigh: meta.regularMarketDayHigh ?? Math.max(price, ...points),
    dayLow: meta.regularMarketDayLow ?? Math.min(price, ...points),
    points,
  };
  return { index, open: session ? now >= session.start && now < session.end : false };
}

export async function getMarketSnapshot(): Promise<MarketSnapshot> {
  const results = await Promise.all(
    marketIndices.map(({ symbol, name }) => fetchIndex(symbol, name).catch(() => null)),
  );
  const loaded = results.filter((result) => result !== null);
  return {
    indices: loaded.map((result) => result.index),
    open: loaded.some((result) => result.open),
    updatedAt: Date.now(),
  };
}
