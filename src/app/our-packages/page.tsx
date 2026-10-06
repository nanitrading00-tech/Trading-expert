import PackagesPage from "@/components/pages/PackagesPage";
import { dictionaries } from "@/lib/content";
import { fill } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const t = dictionaries.en.packages;

export const metadata = pageMetadata({
  locale: "en",
  path: "/our-packages",
  title: t.metaTitle,
  description: fill(t.metaDescription, { name: site.name }),
  keywords: ["stock market", "investments", "financial success"],
});

export default function Page() {
  return <PackagesPage locale="en" />;
}
