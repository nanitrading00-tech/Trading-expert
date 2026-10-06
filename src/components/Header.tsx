"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, type KeyboardEvent } from "react";
import { LuLanguages, LuSparkles } from "react-icons/lu";
import { EnquireButton } from "./EnquiryDialog";
import { navPaths, site } from "@/lib/site";
import { fill, localePath, swapLocalePath } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const { locale, dict } = useLocale();
  // Tracking the page the menu was opened on closes it after any navigation, including Back.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);

  const close = () => setOpenOn(null);

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape" && open) {
      close();
      menuButton.current?.focus();
    }
  }

  return (
    <header className={styles.header} onKeyDown={onKeyDown}>
      <div className={styles.inner}>
        <Link href={localePath(locale, "/")} className={styles.logo} onClick={close}>
          <Image src={site.logo} alt={`${site.name} logo`} width={600} height={128} preload />
        </Link>

        <nav id="site-nav" className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Main">
          <ul>
            {navPaths.map(({ href, key }) => {
              const target = localePath(locale, href);
              const active = pathname === target;
              return (
                <li key={href}>
                  <Link
                    href={target}
                    className={active ? styles.active : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={close}
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              );
            })}
            <li className={styles.langItem}>
              <Link href={swapLocalePath(pathname)} className={styles.lang} onClick={close} hrefLang={locale === "en" ? "hi" : "en"}>
                <LuLanguages aria-hidden="true" /> {dict.switchTo}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <EnquireButton
            className={`btn btn-primary ${styles.cta}`}
            title={fill(dict.cta.startTrial, { trial: site.freeTrial })}
            subject={`${site.freeTrial} request`}
          >
            <LuSparkles aria-hidden="true" />
            <span>{dict.cta.freeTrial}</span>
          </EnquireButton>

          <button
            ref={menuButton}
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
