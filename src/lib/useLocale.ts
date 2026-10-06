"use client";

import { usePathname } from "next/navigation";
import { getDictionary, localeFromPathname } from "./i18n";

/** Reads the current language from the URL, so client components don't need props. */
export function useLocale() {
  const locale = localeFromPathname(usePathname());
  return { locale, dict: getDictionary(locale) };
}
