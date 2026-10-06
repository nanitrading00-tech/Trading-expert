import AboutPage from "@/components/pages/AboutPage";
import { dictionaries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

const t = dictionaries.en.about;

export const metadata = pageMetadata({
  locale: "en",
  path: "/about",
  title: t.metaTitle,
  description: t.metaDescription,
  keywords: ["organization", "technical analysis", "trading community"],
});

export default function Page() {
  return <AboutPage locale="en" />;
}
