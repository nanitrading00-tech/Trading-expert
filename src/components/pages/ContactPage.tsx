import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import EnquiryForm from "@/components/EnquiryForm";
import PageBanner from "@/components/PageBanner";
import { fill, getDictionary, type Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import styles from "./ContactPage.module.css";

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&t=m&z=13&ie=UTF8&output=embed`;

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact;

  const channels = [
    { icon: <LuPhone />, label: t.callUs, value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}` },
    { icon: <FaWhatsapp />, label: t.whatsapp, value: t.whatsappValue, href: whatsappLink, external: true },
    { icon: <LuMail />, label: t.emailLabel, value: site.email, href: `mailto:${site.email}` },
    {
      icon: <LuMapPin />,
      label: t.addressLabel,
      value: site.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`,
      external: true,
    },
  ];

  return (
    <>
      <PageBanner
        image="/images/contact-banner.webp"
        eyebrow={t.bannerEyebrow}
        subtitle={fill(t.bannerSubtitle, { name: site.name })}
      >
        {t.bannerTitle} <span className="gradient-text">{t.bannerTitleAccent}</span>
      </PageBanner>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className="reveal">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className={styles.title}>
              {t.title} <span className="gradient-text">{t.titleAccent}</span>
            </h2>
            <p className={styles.lead}>{t.lead}</p>
            <ul className={styles.channels}>
              {channels.map(({ icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    className={styles.channel}
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <span className={styles.channelIcon} aria-hidden="true">
                      {icon}
                    </span>
                    <span>
                      <span className={styles.channelLabel}>{label}</span>
                      <span className={styles.channelValue}>{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm className="reveal" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t.teamEyebrow}</span>
            <h2>
              {t.teamTitle} <span className="gradient-text">{t.teamTitleAccent}</span>
            </h2>
          </div>
          <div className={`${styles.mapFrame} glass reveal`}>
            <iframe
              className={styles.map}
              title={t.mapTitle}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
