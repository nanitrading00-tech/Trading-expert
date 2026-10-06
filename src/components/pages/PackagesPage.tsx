import { EnquireButton } from "@/components/EnquiryDialog";
import PackageCard from "@/components/PackageCard";
import PageBanner from "@/components/PageBanner";
import { dictionaries } from "@/lib/content";
import { getDictionary, type Locale } from "@/lib/i18n";
import styles from "./PackagesPage.module.css";

export default function PackagesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.packages;

  return (
    <>
      <PageBanner image="/images/packages-banner.webp" eyebrow={t.bannerEyebrow} subtitle={t.bannerSubtitle}>
        {t.bannerTitle} <span className="gradient-text">{t.bannerTitleAccent}</span>
      </PageBanner>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2>
              {t.title} <span className="gradient-text">{t.titleAccent}</span>
            </h2>
            <p>{t.lead}</p>
          </div>

          <div className={styles.grid}>
            {t.items.map((pkg, index) => (
              <PackageCard key={pkg.id} {...pkg} sheetName={dictionaries.en.packages.items[index].title} />
            ))}
          </div>

          <p className={styles.note}>
            {t.note}{" "}
            <EnquireButton className={styles.link} title={t.helpTitle} subject={t.helpSubject}>
              {dict.cta.talkToExpert}
            </EnquireButton>
          </p>
        </div>
      </section>
    </>
  );
}
