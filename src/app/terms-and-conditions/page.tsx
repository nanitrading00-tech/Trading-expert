import TermsPage from "@/components/pages/TermsPage";
import { dictionaries } from "@/lib/content";
import { fill } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const t = dictionaries.en.terms;

export const metadata = pageMetadata({
  locale: "en",
  path: "/terms-and-conditions",
  title: t.metaTitle,
  description: fill(t.metaDescription, { name: site.name }),
  keywords: ["investors", "stock market", "terms and conditions"],
});

export default function Page() {
  return <TermsPage locale="en" />;
}
