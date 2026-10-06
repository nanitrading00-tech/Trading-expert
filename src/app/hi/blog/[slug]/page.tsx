import type { Metadata } from "next";
import BlogPostPage from "@/components/pages/BlogPostPage";
import { getPost, getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return (await getPosts("hi")).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hi/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost("hi", slug);
  if (!post) return {};
  return pageMetadata({
    locale: "hi",
    path: `/blog/${slug}`,
    title: post.meta.title,
    description: post.meta.description,
  });
}

export default async function Page({ params }: PageProps<"/hi/blog/[slug]">) {
  const { slug } = await params;
  return <BlogPostPage locale="hi" slug={slug} />;
}
