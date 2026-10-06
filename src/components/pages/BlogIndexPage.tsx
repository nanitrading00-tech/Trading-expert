import Link from "next/link";
import { LuArrowRight, LuClock } from "react-icons/lu";
import PageBanner from "@/components/PageBanner";
import { getPosts } from "@/lib/blog";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import styles from "./BlogPage.module.css";

export default async function BlogIndexPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.blog;
  const posts = await getPosts(locale);
  const dateFormat = new Intl.DateTimeFormat(locale === "hi" ? "hi-IN" : "en-IN", { dateStyle: "long" });

  return (
    <>
      <PageBanner image="/images/finance-banner.webp" eyebrow={t.bannerEyebrow} subtitle={t.bannerSubtitle}>
        {t.bannerTitle} <span className="gradient-text">{t.bannerTitleAccent}</span>
      </PageBanner>

      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p className={styles.empty}>{t.empty}</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <article key={post.slug} className={`${styles.card} reveal`}>
                  <p className={styles.meta}>
                    <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                    <span>
                      <LuClock aria-hidden="true" /> {post.readingMinutes} {t.minRead}
                    </span>
                  </p>
                  <h2 className={styles.cardTitle}>
                    <Link href={localePath(locale, `/blog/${post.slug}`)}>{post.title}</Link>
                  </h2>
                  <p className={styles.excerpt}>{post.description}</p>
                  <span className={styles.more}>
                    {dict.cta.readMore} <LuArrowRight aria-hidden="true" />
                  </span>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
