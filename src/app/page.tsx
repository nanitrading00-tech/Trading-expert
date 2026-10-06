import HomePage from "@/components/pages/HomePage";
import { dictionaries } from "@/lib/content";
import { fill } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const t = dictionaries.en.home;

// The title template from the layout does not apply to the home page, so the site name is written out.
export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: `${t.metaTitle} | ${site.name}`,
  description: fill(t.metaDescription, { name: site.name }),
  keywords: ["investing", "stock market", "day trading", "nifty", "bank nifty"],
});

export default function Page() {
  return <HomePage locale="en" />;
}
