import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { localePath, locales } from "@/lib/i18n";
import { navPaths, site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const posts = await getPosts(locale);
      const paths = [
        ...navPaths.map((link) => link.href),
        "/privacy-policy",
        ...posts.map((post) => `/blog/${post.slug}`),
      ];
      return paths.map((path) => ({
        url: new URL(localePath(locale, path), site.url).toString(),
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 1 : 0.7,
      }));
    }),
  );
  return entries.flat();
}
