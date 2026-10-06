import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "./i18n";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  readingMinutes: number;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

const postsDir = (locale: Locale) => path.join(BLOG_DIR, locale);

const readingMinutes = (text: string) => Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));

function toMeta(slug: string, data: Record<string, unknown>, body: string): PostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: data.author ? String(data.author) : undefined,
    readingMinutes: readingMinutes(body),
  };
}

export async function getPosts(locale: Locale): Promise<PostMeta[]> {
  let files: string[];
  try {
    files = await readdir(postsDir(locale));
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, "");
        const { data, content } = matter(await readFile(path.join(postsDir(locale), file), "utf8"));
        return toMeta(slug, data, content);
      }),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(locale: Locale, slug: string) {
  // Only plain file names are accepted, so a slug can never escape the blog folder.
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  let file: string;
  try {
    file = await readFile(path.join(postsDir(locale), `${slug}.md`), "utf8");
  } catch {
    return null;
  }

  const { data, content } = matter(file);
  // Articles are written by the site owner, so their markdown is trusted.
  const html = await marked.parse(content);
  return { meta: toMeta(slug, data, content), html };
}
