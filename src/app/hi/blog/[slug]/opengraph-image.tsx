import { getPost, getPosts } from "@/lib/blog";
import { dictionaries } from "@/lib/content";
import { shareImage } from "@/lib/og";

export { size, contentType } from "@/lib/og";

export async function generateStaticParams() {
  return (await getPosts("hi")).map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost("hi", slug);
  return shareImage({
    locale: "hi",
    kicker: dictionaries.hi.blog.bannerEyebrow,
    title: post?.meta.title ?? dictionaries.hi.blog.metaTitle,
  });
}
