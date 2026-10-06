import TermsPage from "@/components/pages/TermsPage";
import { dictionaries } from "@/lib/content";
import { fill } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const t = dictionaries.hi.terms;

export const metadata = pageMetadata({
  locale: "hi",
  path: "/terms-and-conditions",
  title: t.metaTitle,
  description: fill(t.metaDescription, { name: site.name }),
});

export default function Page() {
  return <TermsPage locale="hi" />;
}
