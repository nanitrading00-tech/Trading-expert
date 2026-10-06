"use client";

import { LuCircleCheck, LuCrown } from "react-icons/lu";
import { EnquireButton } from "./EnquiryDialog";
import type { PackageContent } from "@/lib/content";
import { packages } from "@/lib/site";
import { useLocale } from "@/lib/useLocale";
import styles from "./PackageCard.module.css";

/** sheetName is always the English title, so the Google Sheet stays readable in one language. */
type Props = PackageContent & { sheetName: string };

export default function PackageCard({ id, title, highlights, features, tag, sheetName }: Props) {
  const dict = useLocale().dict;
  const { price, paymentLink: payLink } = packages[id];

  return (
    <article className={`${styles.card} reveal`}>
      {tag && (
        <span className={styles.tag}>
          <LuCrown aria-hidden="true" /> {tag}
        </span>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        <span className="num">₹{price}</span>
        <small>{dict.packages.perMonth}</small>
      </p>
      <ul className={styles.highlights}>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature}>
            <LuCircleCheck aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <EnquireButton
          className={`btn ${payLink ? "btn-ghost" : "btn-primary"} ${styles.cta}`}
          title={dict.packages.enquiryTitle}
          subject={`Enquiry: ${sheetName}`}
          packageName={`${sheetName} — ₹${price}/month`}
        >
          {dict.cta.enquireNow}
        </EnquireButton>
        {payLink && (
          <a className={`btn btn-primary ${styles.cta}`} href={payLink} target="_blank" rel="noopener noreferrer">
            {dict.cta.payNow}
          </a>
        )}
      </div>
    </article>
  );
}
