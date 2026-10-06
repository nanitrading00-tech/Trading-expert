import { getMarketSnapshot } from "@/lib/market";

// Visitors share one cached copy that refreshes at most once a minute.
export const revalidate = 60;

export async function GET() {
  return Response.json(await getMarketSnapshot());
}
