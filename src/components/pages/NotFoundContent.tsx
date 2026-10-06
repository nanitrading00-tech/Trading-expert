"use client";

import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { localePath } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";
import styles from "./NotFoundContent.module.css";

export default function NotFoundContent() {
  const { locale, dict } = useLocale();
  const t = dict.notFound;

  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <p className={`${styles.code} gradient-text`}>{t.code}</p>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.text}>{t.text}</p>
        <div className={styles.actions}>
          <Link href={localePath(locale, "/")} className="btn btn-primary">
            <LuHouse aria-hidden="true" /> {dict.cta.backHome}
          </Link>
          <Link href={localePath(locale, "/contact-us")} className="btn btn-ghost">
            {dict.cta.contactUs}
          </Link>
        </div>
      </div>
    </section>
  );
}
