import { dictionaries, type Dictionary } from "./content";

export const locales = ["en", "hi"] as const;
export type Locale = (typeof locales)[number];

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

/** English pages live at the root; Hindi pages get a /hi prefix. */
export function localePath(locale: Locale, path: string) {
  if (locale === "en") return path;
  return path === "/" ? "/hi" : `/hi${path}`;
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/hi" || pathname.startsWith("/hi/") ? "hi" : "en";
}

/** The same page in the other language. */
export function swapLocalePath(pathname: string) {
  if (localeFromPathname(pathname) === "hi") return pathname.replace(/^\/hi/, "") || "/";
  return localePath("hi", pathname);
}

/** Replaces {placeholders} in a dictionary string. */
export function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** A YYYY-MM-DD date written out in the page's language, e.g. "1 May 2024" or "1 मई 2024". */
export function formatDate(locale: Locale, isoDate: string) {
  const format = new Intl.DateTimeFormat(locale === "hi" ? "hi-IN" : "en-IN", { dateStyle: "long", timeZone: "UTC" });
  return format.format(new Date(isoDate));
}
