import Image from "next/image";
import Link from "next/link";
import {
  LuActivity,
  LuArrowRight,
  LuBadgeCheck,
  LuChartCandlestick,
  LuChartLine,
  LuCircleCheck,
  LuGem,
  LuHeadset,
  LuLightbulb,
  LuShieldCheck,
  LuSparkles,
  LuTarget,
  LuTrendingUp,
} from "react-icons/lu";
import Counter from "@/components/Counter";
import { EnquireButton } from "@/components/EnquiryDialog";
import EnquiryForm from "@/components/EnquiryForm";
import MarketPanel from "@/components/MarketPanel";
import ServiceCard from "@/components/ServiceCard";
import { fill, getDictionary, localePath, type Locale } from "@/lib/i18n";
import { site, trackRecord } from "@/lib/site";
import styles from "./HomePage.module.css";

const featureIcons = [<LuBadgeCheck key="0" />, <LuLightbulb key="1" />, <LuChartLine key="2" />, <LuHeadset key="3" />];

const serviceIcons = [
  <LuChartCandlestick key="0" />,
  <LuGem key="1" />,
  <LuTrendingUp key="2" />,
  <LuActivity key="3" />,
  <LuShieldCheck key="4" />,
  <LuTarget key="5" />,
];

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home;
  const startTrial = fill(dict.cta.startTrial, { trial: site.freeTrial });

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className="reveal">
            <span className="eyebrow">
              <LuSparkles aria-hidden="true" /> {t.eyebrow}
            </span>
            <h1 className={styles.heroTitle}>
              {t.headline} <span className="gradient-text">{t.headlineAccent}</span>
            </h1>
            <p className={styles.heroLead}>{t.lead}</p>
            <div className={styles.heroActions}>
              <EnquireButton className="btn btn-primary" title={startTrial} subject={`${site.freeTrial} request`}>
                {startTrial} <LuArrowRight aria-hidden="true" />
              </EnquireButton>
              <Link href={localePath(locale, "/our-packages")} className="btn btn-ghost">
                {dict.cta.viewPackages}
              </Link>
            </div>
            <ul className={styles.points}>
              {t.points.map((point) => (
                <li key={point}>
                  <LuCircleCheck aria-hidden="true" /> {point}
                </li>
              ))}
            </ul>
          </div>
          <MarketPanel className={`${styles.heroPanel} reveal`} />
        </div>
      </section>

      <section>
        <div className={`container ${styles.featureGrid}`}>
          {t.featuresTitle.map((label, index) => (
            <div key={label} className={`${styles.feature} reveal`}>
              <span className={styles.featureIcon} aria-hidden="true">
                {featureIcons[index]}
              </span>
              <h3>{label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t.servicesEyebrow}</span>
            <h2>
              {t.servicesTitle} <span className="gradient-text">{t.servicesTitleAccent}</span>
            </h2>
            <p>{t.servicesLead}</p>
          </div>
          <div className={styles.serviceGrid}>
            {t.services.map((service, index) => (
              <ServiceCard key={service.title} icon={serviceIcons[index]} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.banner}>
        <h2 className="reveal">
          {t.bannerLine1}
          <br />
          <span className="gradient-text">{t.bannerLine2}</span>
        </h2>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t.statsEyebrow}</span>
            <h2>
              {t.statsTitle} <span className="gradient-text">{t.statsTitleAccent}</span>
            </h2>
          </div>
          <div className={styles.statGrid}>
            {t.stats.map((label, index) => (
              <div key={label} className={`${styles.stat} glass reveal`}>
                <Counter
                  target={trackRecord[index].value}
                  suffix={trackRecord[index].suffix}
                  className={`${styles.statValue} gradient-text num`}
                />
                <p className={styles.statLabel}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.why}`}>
          <div className="reveal">
            <span className="eyebrow">{t.whyEyebrow}</span>
            <h2 className={styles.whyTitle}>
              {t.whyTitle} <span className="gradient-text">{t.whyTitleAccent}</span>
            </h2>
            <p className={styles.whyText}>{fill(t.whyText, { name: site.name })}</p>
            <EnquireButton className={`btn btn-ghost ${styles.whyAction}`} title={dict.cta.talkToExpert}>
              {dict.cta.talkToExpert} <LuArrowRight aria-hidden="true" />
            </EnquireButton>
          </div>
          <div className={`${styles.whyMedia} reveal`}>
            <Image
              src="/images/why-phone.webp"
              alt={t.whyImageAlt}
              width={546}
              height={447}
              sizes="(max-width: 920px) 100vw, 600px"
              className={styles.whyImage}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container glass ${styles.cta}`}>
          <div className="reveal">
            <span className="eyebrow">{t.ctaEyebrow}</span>
            <h2>
              {t.ctaTitle} <span className="gradient-text">{site.freeTrial}</span>
            </h2>
            <p>{t.ctaText}</p>
            <ul className={styles.checks}>
              {t.ctaPerks.map((perk) => (
                <li key={perk}>
                  <LuCircleCheck aria-hidden="true" /> {perk}
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm
            className="reveal"
            title={dict.form.callbackTitle}
            subject={`${site.freeTrial} request`}
          />
        </div>
      </section>
    </>
  );
}
