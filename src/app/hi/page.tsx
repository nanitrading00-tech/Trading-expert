import HomePage from "@/components/pages/HomePage";
import { dictionaries } from "@/lib/content";
import { fill } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const t = dictionaries.hi.home;

export const metadata = pageMetadata({
  locale: "hi",
  path: "/",
  title: t.metaTitle,
  description: fill(t.metaDescription, { name: site.name }),
});

export default function Page() {
  return <HomePage locale="hi" />;
}
