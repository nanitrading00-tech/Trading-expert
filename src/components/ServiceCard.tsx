import type { ReactNode } from "react";
import styles from "./ServiceCard.module.css";

type Props = { icon: ReactNode; title: string; text: string };

export default function ServiceCard({ icon, title, text }: Props) {
  return (
    <article className={`${styles.card} reveal`}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </article>
  );
}
