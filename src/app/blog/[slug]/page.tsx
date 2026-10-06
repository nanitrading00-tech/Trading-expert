import type { Metadata } from "next";
import BlogPostPage from "@/components/pages/BlogPostPage";
import { getPost, getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return (await getPosts("en")).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost("en", slug);
  if (!post) return {};
  return pageMetadata({
    locale: "en",
    path: `/blog/${slug}`,
    title: post.meta.title,
    description: post.meta.description,
  });
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  return <BlogPostPage locale="en" slug={slug} />;
}
