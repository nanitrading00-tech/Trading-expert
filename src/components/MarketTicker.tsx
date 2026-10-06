"use client";

import { formatChange, formatPrice, useMarket } from "@/lib/useMarket";
import { useLocale } from "@/lib/useLocale";
import type { MarketIndex } from "@/lib/market";
import styles from "./MarketTicker.module.css";

function Items({ items, hidden }: { items: MarketIndex[]; hidden?: boolean }) {
  return (
    <ul className={styles.group} aria-hidden={hidden || undefined}>
      {items.map((item) => {
        const up = item.change >= 0;
        return (
          <li key={item.symbol} className={styles.item}>
            <span className={styles.name}>{item.name}</span>
            <span className={`${styles.price} num`}>{formatPrice(item.price)}</span>
            <span className={`num ${up ? "up" : "down"}`}>
              {up ? "▲" : "▼"} {formatChange(item.change, item.changePercent)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function MarketTicker() {
  const market = useMarket();
  const ticker = useLocale().dict.ticker;

  return (
    <div className={styles.ticker} role="region" aria-label="Live market prices">
      <div className={styles.status}>
        <span className={`live-dot ${market?.open ? "" : "closed"}`} />
        {market?.open ? ticker.live : ticker.closed}
      </div>
      <div className={styles.viewport}>
        {!market ? (
          <span className={styles.message}>{ticker.loading}</span>
        ) : market.indices.length === 0 ? (
          <span className={styles.message}>{ticker.unavailable}</span>
        ) : (
          // Two copies of the list make the scroll loop seamless.
          <div className={styles.track}>
            <Items items={market.indices} />
            <Items items={market.indices} hidden />
          </div>
        )}
      </div>
    </div>
  );
}
