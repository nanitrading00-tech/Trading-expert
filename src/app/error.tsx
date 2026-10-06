"use client";

import Link from "next/link";
import { LuRefreshCw } from "react-icons/lu";
import { localePath } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";
import styles from "@/components/pages/NotFoundContent.module.css";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const { locale, dict } = useLocale();

  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <h1 className={styles.title}>{dict.error.title}</h1>
        <p className={styles.text}>{dict.error.text}</p>
        <div className={styles.actions}>
          <button type="button" className="btn btn-primary" onClick={reset}>
            <LuRefreshCw aria-hidden="true" /> {dict.error.retry}
          </button>
          <Link href={localePath(locale, "/contact-us")} className="btn btn-ghost">
            {dict.cta.contactUs}
          </Link>
        </div>
      </div>
    </section>
  );
}
