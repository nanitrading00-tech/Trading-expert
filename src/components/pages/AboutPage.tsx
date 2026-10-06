import Image from "next/image";
import { LuCircleCheck } from "react-icons/lu";
import PageBanner from "@/components/PageBanner";
import { fill, getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import styles from "./AboutPage.module.css";

export default function AboutPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about;

  return (
    <>
      <PageBanner image="/images/about-banner.webp" eyebrow={t.bannerEyebrow} subtitle={t.bannerSubtitle}>
        {t.bannerTitle} <span className="gradient-text">{site.name}</span>
      </PageBanner>

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div className="reveal">
            <span className="eyebrow">{t.introEyebrow}</span>
            <h2 className={styles.title}>
              {t.introTitle} <span className="gradient-text">{t.introTitleAccent}</span> {t.introTitleEnd}
            </h2>
            <p className={styles.text}>{t.introText}</p>
          </div>
          <div className={`${styles.media} reveal`}>
            <Image
              src="/images/about-laptop.webp"
              alt={t.introImageAlt}
              width={582}
              height={381}
              sizes="(max-width: 920px) 100vw, 600px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div className={`${styles.media} reveal`}>
            <Image src="/images/about-strategy.webp" alt="" width={582} height={381} sizes="(max-width: 920px) 100vw, 600px" />
          </div>
          <div className="reveal">
            <span className="eyebrow">{t.strategyEyebrow}</span>
            <h2 className={styles.title}>
              {t.strategyTitle} <span className="gradient-text">{t.strategyTitleAccent}</span>
            </h2>
            <ul className={styles.checks}>
              {t.strengths.map((item) => (
                <li key={item}>
                  <LuCircleCheck aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${styles.vision} glass reveal`}>
            <span className="eyebrow">{t.visionEyebrow}</span>
            <p>{fill(t.visionText, { name: site.name })}</p>
          </div>
        </div>
      </section>
    </>
  );
}
