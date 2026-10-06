import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./PageBanner.module.css";

type Props = {
  image: string;
  eyebrow: string;
  subtitle?: string;
  children: ReactNode;
};

export default function PageBanner({ image, eyebrow, subtitle, children }: Props) {
  return (
    <section className={styles.banner}>
      <Image src={image} alt="" fill preload sizes="100vw" className={styles.image} />
      <div className={`container ${styles.content} reveal`}>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className={styles.title}>{children}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
