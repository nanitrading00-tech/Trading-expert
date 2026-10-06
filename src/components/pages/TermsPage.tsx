import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { fill, formatDate, getDictionary, localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import styles from "./LegalPage.module.css";

export default function TermsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.terms;
  const date = formatDate(locale, site.policyUpdated);

  return (
    <>
      <PageBanner image="/images/terms-banner.webp" eyebrow={t.bannerEyebrow} subtitle={t.bannerSubtitle}>
        {t.bannerTitle} <span className="gradient-text">{t.bannerTitleAccent}</span>
      </PageBanner>

      <section className="section">
        <div className={`container ${styles.content} glass`}>
          <p className={styles.updated}>{fill(dict.lastUpdated, { date })}</p>
          {t.sections.map(({ heading, points }) => (
            <div key={heading} className="reveal">
              <h2>{heading}</h2>
              <ul>
                {points.map((point) => (
                  <li key={point}>{fill(point, { trial: site.freeTrial })}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className={`${styles.seeAlso} reveal`}>
            {t.seeAlso} <Link href={localePath(locale, "/privacy-policy")}>{t.privacyLink}</Link>
          </p>
        </div>
      </section>
    </>
  );
}
