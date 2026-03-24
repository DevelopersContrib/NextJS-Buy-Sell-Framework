"use client";

import { useFetchBlog } from "@/lib/hooks/useBlogFetcher";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DEMO_BLOG_POSTS = [
  {
    id: "demo-1",
    slug: "Welcome to Our Blog",
    title: "Welcome to Our Blog",
    image_url: "https://placehold.co/400x300/f4f4f5/71717a?text=Blog+1",
    image_caption: "Blog post",
    createdAt: "Mar 1, 2025",
    tags: ["News", "Updates"],
  },
  {
    id: "demo-2",
    slug: "Getting Started Guide",
    title: "Getting Started Guide",
    image_url: "https://placehold.co/400x300/f4f4f5/71717a?text=Blog+2",
    image_caption: "Blog post",
    createdAt: "Feb 28, 2025",
    tags: ["Guide", "Tips"],
  },
  {
    id: "demo-3",
    slug: "Latest Updates and News",
    title: "Latest Updates and News",
    image_url: "https://placehold.co/400x300/f4f4f5/71717a?text=Blog+3",
    image_caption: "Blog post",
    createdAt: "Feb 25, 2025",
    tags: ["News", "Community"],
  },
];

const readMoreClass =
  "tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-xl tw-bg-blue-600 tw-px-4 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-no-underline tw-shadow-md tw-shadow-blue-900/10 tw-transition-all tw-duration-200 hover:tw-bg-blue-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-blue-600 motion-safe:hover:tw--translate-y-0.5 motion-safe:active:tw-scale-[0.98]";

function postHref(post, isDemo) {
  if (isDemo) return "#";
  return `/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`;
}

const BlogList = ({ theme = "black" }) => {
  const { blog, loading } = useBlogStore();
  useFetchBlog();

  const blogPost =
    blog.length > 0
      ? blog.map((item) => ({
          id: item.id,
          slug: item.contents[0].title,
          title: item.contents[0].title,
          image_url: item.contents[0].imageUrl,
          image_caption: item.contents[0].imageCaption,
          createdAt: item.createdAt,
          tags: item.contents[0].blogPostTags,
        }))
      : DEMO_BLOG_POSTS;

  const isWhite = theme === "white";

  const textColor = isWhite ? "tw-text-white" : "tw-text-zinc-900";
  const sectionBg = "tw-bg-transparent";
  const mutedColor = isWhite ? "tw-text-zinc-300" : "tw-text-zinc-600";
  const isDemo = blog.length === 0 && !loading;

  const cardClass = isWhite
    ? "tw-group tw-flex tw-h-full tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white/20 tw-bg-white/10 tw-backdrop-blur-md tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-border-white/35 hover:tw-bg-white/[0.14]"
    : "tw-group tw-flex tw-h-full tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-2xl tw-border tw-border-zinc-200/80 tw-bg-white/90 tw-backdrop-blur-sm tw-shadow-md tw-shadow-zinc-900/[0.05] tw-ring-1 tw-ring-black/[0.03] tw-transition-[box-shadow,border-color,transform] tw-duration-300 hover:tw-border-blue-200/70 hover:tw-shadow-lg hover:tw-shadow-blue-900/[0.06] motion-safe:hover:tw--translate-y-0.5";

  const tagPillClass = isWhite
    ? "tw-border tw-border-white/30 tw-bg-white/10 tw-text-zinc-100"
    : "tw-bg-blue-50 tw-text-blue-900 tw-ring-1 tw-ring-blue-100/90";

  const datePillClass = isWhite
    ? "tw-bg-white/15 tw-text-zinc-200"
    : "tw-bg-zinc-50 tw-text-zinc-600 tw-ring-1 tw-ring-zinc-200/80";

  const titleLinkClass = isWhite
    ? `${textColor} hover:tw-text-blue-200 tw-transition-colors tw-no-underline`
    : `${textColor} hover:tw-text-blue-600 tw-transition-colors tw-no-underline`;

  const eyebrowClass = isWhite ? "tw-text-blue-200" : "tw-text-blue-600";

  return (
    <section className={`tw-pt-14 tw-pb-12 md:tw-pt-20 md:tw-pb-20 ${sectionBg}`}>
      <div className="container tw-max-w-6xl">
        <header className="tw-mx-auto tw-mb-10 tw-max-w-2xl tw-text-center md:tw-mb-14">
          <p
            className={`tw-mb-2 tw-text-[0.6875rem] tw-font-semibold tw-uppercase tw-tracking-[0.14em] sm:tw-text-xs ${eyebrowClass}`}
          >
            Blog
          </p>
          <h2
            className={`tw-text-balance tw-text-3xl tw-font-semibold tw-tracking-tight md:tw-text-4xl ${textColor}`}
          >
            Latest blogs
          </h2>
          {isDemo && (
            <p className={`tw-mt-3 tw-text-sm ${mutedColor}`}>
              Showing demo content for preview.
            </p>
          )}
        </header>

        {loading ? (
          <p className={`tw-text-center tw-text-sm ${mutedColor}`}>Loading blog posts…</p>
        ) : blogPost.length > 0 ? (
          <div className="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-3 md:tw-gap-5 lg:tw-gap-6">
            {blogPost.map((post) => {
              const href = postHref(post, isDemo);
              const Cover = (
                <div className="tw-relative tw-aspect-[16/10] tw-w-full tw-overflow-hidden tw-bg-zinc-100">
                  {isDemo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image_url}
                      alt={post.image_caption}
                      className="tw-h-full tw-w-full tw-object-cover tw-transition-transform tw-duration-300 tw-ease-out group-hover:tw-scale-[1.03]"
                    />
                  ) : (
                    <Image
                      src={post.image_url}
                      alt={post.image_caption}
                      fill
                      className="tw-object-cover tw-transition-transform tw-duration-300 tw-ease-out group-hover:tw-scale-[1.03]"
                      sizes="(max-width: 767px) 100vw, 33vw"
                    />
                  )}
                </div>
              );

              const body = (
                <>
                  <div className="tw-flex tw-flex-1 tw-flex-col tw-p-5 sm:tw-p-6">
                    <div
                      className={`tw-mb-3 tw-inline-flex tw-w-fit tw-items-center tw-gap-1.5 tw-rounded-md tw-px-2 tw-py-1 tw-text-xs ${datePillClass}`}
                    >
                      <Calendar className="tw-h-3.5 tw-w-3.5 tw-shrink-0 tw-opacity-80" aria-hidden />
                      <span>{post.createdAt}</span>
                    </div>
                    <h3
                      className={`tw-text-lg tw-font-semibold tw-leading-snug tw-tracking-tight sm:tw-text-xl ${(post.tags?.length ?? 0) > 0 ? "tw-mb-3" : "tw-mb-6"}`}
                    >
                      {isDemo ? (
                        <a href={href} className={titleLinkClass}>
                          {post.title}
                        </a>
                      ) : (
                        <Link href={href} className={titleLinkClass}>
                          {post.title}
                        </Link>
                      )}
                    </h3>
                    {(post.tags?.length ?? 0) > 0 && (
                      <ul className="tw-mb-6 tw-flex tw-list-none tw-flex-wrap tw-gap-2 tw-pl-0">
                        {post.tags.map((tag, idx) => (
                          <li
                            key={idx}
                            className={`tw-rounded-md tw-px-2 tw-py-0.5 tw-text-xs tw-font-medium ${tagPillClass}`}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="tw-mt-auto tw-pt-1">
                      {isDemo ? (
                        <a href={href} className={readMoreClass}>
                          Read more
                        </a>
                      ) : (
                        <Link href={href} className={readMoreClass}>
                          Read more
                        </Link>
                      )}
                    </div>
                  </div>
                </>
              );

              return (
                <article key={post.id} className={`${cardClass} tw-min-w-0`}>
                  {isDemo ? (
                    <a href={href} className="tw-relative tw-block tw-shrink-0 tw-no-underline">
                      {Cover}
                    </a>
                  ) : (
                    <Link href={href} className="tw-relative tw-block tw-shrink-0 tw-no-underline">
                      {Cover}
                    </Link>
                  )}
                  {body}
                </article>
              );
            })}
          </div>
        ) : (
          <p className={`tw-text-center tw-text-sm ${mutedColor}`}>No blog posts available.</p>
        )}
      </div>
    </section>
  );
};

export default BlogList;
