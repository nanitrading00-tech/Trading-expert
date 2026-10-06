"use client";

import { useSyncExternalStore } from "react";
import { LuCookie } from "react-icons/lu";
import { getConsent, setConsent, subscribeConsent } from "@/lib/consent";
import { useLocale } from "@/lib/useLocale";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  // The server snapshot is non-null so the banner never flashes before hydration.
  const consent = useSyncExternalStore(subscribeConsent, getConsent, () => "unknown");
  const cookie = useLocale().dict.cookie;
  if (consent !== null) return null;

  return (
    <div className={`${styles.banner} glass`} role="region" aria-label="Cookie consent">
      <p className={styles.text}>
        <LuCookie aria-hidden="true" className={styles.icon} />
        {cookie.text}
      </p>
      <div className={styles.actions}>
        <button type="button" className="btn btn-primary" onClick={() => setConsent("accepted")}>
          {cookie.accept}
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setConsent("declined")}>
          {cookie.decline}
        </button>
      </div>
    </div>
  );
}
