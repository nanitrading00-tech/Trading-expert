"use client";

import { useLocale } from "@/lib/useLocale";
import styles from "./SkipLink.module.css";

export default function SkipLink() {
  return (
    <a className={styles.skip} href="#main">
      {useLocale().dict.skipToContent}
    </a>
  );
}
