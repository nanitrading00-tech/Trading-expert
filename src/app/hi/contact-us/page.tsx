import ContactPage from "@/components/pages/ContactPage";
import { dictionaries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

const t = dictionaries.hi.contact;

export const metadata = pageMetadata({
  locale: "hi",
  path: "/contact-us",
  title: t.metaTitle,
  description: t.metaDescription,
});

export default function Page() {
  return <ContactPage locale="hi" />;
}
