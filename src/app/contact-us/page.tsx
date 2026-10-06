import ContactPage from "@/components/pages/ContactPage";
import { dictionaries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

const t = dictionaries.en.contact;

export const metadata = pageMetadata({
  locale: "en",
  path: "/contact-us",
  title: t.metaTitle,
  description: t.metaDescription,
  keywords: ["stock market", "investing", "financial advice"],
});

export default function Page() {
  return <ContactPage locale="en" />;
}
