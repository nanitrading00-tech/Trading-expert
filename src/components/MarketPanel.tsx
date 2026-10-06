"use client";

import { useState } from "react";
import Sparkline from "./Sparkline";
import { formatChange, formatPrice, useMarket } from "@/lib/useMarket";
import { fill } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";
import styles from "./MarketPanel.module.css";

const timeFormat = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" });

export default function MarketPanel({ className = "" }: { className?: string }) {
  const market = useMarket();
  const text = useLocale().dict.market;
  const [selected, setSelected] = useState(0);
  const tabs = market?.indices.slice(0, 3) ?? [];
  const item = tabs[selected] ?? tabs[0];
  const up = (item?.change ?? 0) >= 0;

  return (
    <div className={`${styles.panel} glass ${className}`}>
      <div className={styles.top}>
        <span className="eyebrow">
          <span className={`live-dot ${market?.open ? "" : "closed"}`} />
          {market?.open ? text.open : text.closed}
        </span>
        {market && (
          <span className={styles.updated}>{fill(text.updated, { time: timeFormat.format(market.updatedAt) })}</span>
        )}
      </div>

      {!market ? (
        <div className={styles.skeleton} aria-label={text.loading} />
      ) : !item ? (
        <p className={styles.empty}>{text.unavailable}</p>
      ) : (
        <>
          <div className={styles.tabs} role="tablist" aria-label="Index">
            {tabs.map((tab, i) => (
              <button
                key={tab.symbol}
                type="button"
                role="tab"
                aria-selected={tab === item}
                className={styles.tab}
                onClick={() => setSelected(i)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className={styles.priceRow} role="tabpanel" aria-label={item.name}>
            <span className={`${styles.price} num`}>{formatPrice(item.price)}</span>
            <span className={`${styles.change} num ${up ? "up" : "down"}`}>
              {up ? "▲" : "▼"} {formatChange(item.change, item.changePercent)}
            </span>
          </div>

          <Sparkline points={item.points} baseline={item.previousClose} up={up} className={styles.chart} />

          <dl className={styles.stats}>
            <div>
              <dt>{text.prevClose}</dt>
              <dd className="num">{formatPrice(item.previousClose)}</dd>
            </div>
            <div>
              <dt>{text.dayHigh}</dt>
              <dd className="num">{formatPrice(item.dayHigh)}</dd>
            </div>
            <div>
              <dt>{text.dayLow}</dt>
              <dd className="num">{formatPrice(item.dayLow)}</dd>
            </div>
          </dl>
        </>
      )}

      <p className={styles.note}>{text.note}</p>
    </div>
  );
}
