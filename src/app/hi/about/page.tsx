import AboutPage from "@/components/pages/AboutPage";
import { dictionaries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

const t = dictionaries.hi.about;

export const metadata = pageMetadata({
  locale: "hi",
  path: "/about",
  title: t.metaTitle,
  description: t.metaDescription,
});

export default function Page() {
  return <AboutPage locale="hi" />;
}
