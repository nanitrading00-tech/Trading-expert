import PrivacyPage from "@/components/pages/PrivacyPage";
import { dictionaries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "hi",
  path: "/privacy-policy",
  title: dictionaries.hi.privacy.metaTitle,
});

export default function Page() {
  return <PrivacyPage locale="hi" />;
}
