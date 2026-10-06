import PageBanner from "@/components/PageBanner";
import { fill, formatDate, getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import styles from "./LegalPage.module.css";

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.privacy;
  const date = formatDate(locale, site.policyUpdated);

  return (
    <>
      <PageBanner image="/images/terms-banner.webp" eyebrow={t.bannerEyebrow} subtitle={fill(t.effective, { date })}>
        {t.bannerTitle} <span className="gradient-text">{t.bannerTitleAccent}</span>
      </PageBanner>

      <section className="section">
        <div className={`container ${styles.content} glass`}>
          <p className={styles.updated}>{fill(dict.lastUpdated, { date })}</p>
          {t.sections.map(({ heading, text }) => (
            <div key={heading} className="reveal">
              <h2>{heading}</h2>
              <p>{text}</p>
            </div>
          ))}
          <div className="reveal">
            <h2>{t.contactHeading}</h2>
            <p>
              {t.contactText} <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
