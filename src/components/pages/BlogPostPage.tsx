import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft, LuClock } from "react-icons/lu";
import { EnquireButton } from "@/components/EnquiryDialog";
import { getPost } from "@/lib/blog";
import { fill, getDictionary, localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import styles from "./BlogPage.module.css";

type Props = { locale: Locale; slug: string };

export default async function BlogPostPage({ locale, slug }: Props) {
  const post = await getPost(locale, slug);
  if (!post) notFound();

  const dict = getDictionary(locale);
  const t = dict.blog;
  const dateFormat = new Intl.DateTimeFormat(locale === "hi" ? "hi-IN" : "en-IN", { dateStyle: "long" });

  return (
    <article className="section">
      <div className={`container ${styles.article}`}>
        <Link href={localePath(locale, "/blog")} className={styles.back}>
          <LuArrowLeft aria-hidden="true" /> {t.backToBlog}
        </Link>

        <h1 className={styles.title}>{post.meta.title}</h1>
        <p className={styles.meta}>
          <time dateTime={post.meta.date}>{dateFormat.format(new Date(post.meta.date))}</time>
          <span>{post.meta.author ?? fill(t.author, { name: site.name })}</span>
          <span>
            <LuClock aria-hidden="true" /> {post.meta.readingMinutes} {t.minRead}
          </span>
        </p>

        {/* The markdown comes from this project's own content folder, not from visitors. */}
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className={`${styles.cta} glass`}>
          <h2>{t.ctaTitle}</h2>
          <p>{fill(t.ctaText, { trial: site.freeTrial })}</p>
          <EnquireButton
            className="btn btn-primary"
            title={fill(dict.cta.startTrial, { trial: site.freeTrial })}
            subject={`${site.freeTrial} request`}
          >
            {fill(dict.cta.startTrial, { trial: site.freeTrial })}
          </EnquireButton>
        </div>
      </div>
    </article>
  );
}
