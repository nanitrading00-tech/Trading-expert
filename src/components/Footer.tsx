"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import MessageForm from "./MessageForm";
import SocialIcons from "./SocialIcons";
import { navPaths, site, whatsappLink } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";
import styles from "./Footer.module.css";

const phoneLink = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export default function Footer() {
  const { locale, dict } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src={site.logo} alt={`${site.name} logo`} width={600} height={128} />
          <p className={styles.quote}>{site.quote}</p>
          <SocialIcons className={styles.social} />
        </div>

        <nav aria-label="Footer">
          <h2 className={styles.heading}>{dict.footer.quickLinks}</h2>
          <ul className={styles.list}>
            {navPaths.map(({ href, key }) => (
              <li key={href}>
                <Link href={localePath(locale, href)}>{dict.nav[key]}</Link>
              </li>
            ))}
            <li>
              <Link href={localePath(locale, "/privacy-policy")}>{dict.nav.privacy}</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>{dict.footer.contact}</h2>
          <ul className={`${styles.list} ${styles.contact}`}>
            <li>
              <LuPhone aria-hidden="true" />
              <a href={phoneLink}>{site.phone}</a>
            </li>
            <li>
              <FaWhatsapp aria-hidden="true" />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {dict.footer.chatOnWhatsApp}
              </a>
            </li>
            <li>
              <LuMail aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <LuMapPin aria-hidden="true" />
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                {site.address}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.touch}>
          <h2 className={styles.heading}>
            {dict.footer.getInTouch} <span className="gradient-text">{dict.footer.getInTouchAccent}</span>
          </h2>
          <MessageForm />
        </div>
      </div>

      <div className={`container ${styles.disclaimer}`}>
        <p>{site.disclaimer}</p>
        {site.sebiRegistration && (
          <p>
            {dict.footer.sebi} {site.sebiRegistration}
          </p>
        )}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.legalName} {dict.footer.rights}
        </p>
        <p>
          <Link href={localePath(locale, "/privacy-policy")}>{dict.footer.sitePolicy}</Link> · {dict.footer.designedBy}{" "}
          <a href={site.designer.url} target="_blank" rel="nofollow noopener noreferrer">
            {site.designer.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
