import BlogIndexPage from "@/components/pages/BlogIndexPage";
import { dictionaries } from "@/lib/content";
import { fill } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const t = dictionaries.hi.blog;

export const metadata = pageMetadata({
  locale: "hi",
  path: "/blog",
  title: t.metaTitle,
  description: fill(t.metaDescription, { name: site.name }),
});

export default function Page() {
  return <BlogIndexPage locale="hi" />;
}
