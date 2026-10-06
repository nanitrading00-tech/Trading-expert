import type { Metadata } from "next";
import { localePath, type Locale } from "./i18n";
import { site } from "./site";

type Options = {
  locale: Locale;
  path: string;
  title: string;
  description?: string;
  keywords?: string[];
};

/** Page metadata plus the canonical and hreflang links Google needs for a bilingual site. */
export function pageMetadata({ locale, path, title, description, keywords }: Options): Metadata {
  const canonical = localePath(locale, path);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: { en: path, hi: localePath("hi", path) },
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: canonical,
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}
