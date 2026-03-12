"use client";
import { useFetchBlog } from "@/lib/hooks/useBlogFetcher";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const DEMO_BLOG_POSTS = [
  { id: "demo-1", slug: "Welcome to Our Blog", title: "Welcome to Our Blog", image_url: "https://placehold.co/400x300/1e3a5f/94a3b8?text=Blog+1", image_caption: "Blog post", createdAt: "Mar 1, 2025", tags: ["News", "Updates"] },
  { id: "demo-2", slug: "Getting Started Guide", title: "Getting Started Guide", image_url: "https://placehold.co/400x300/1e3a5f/94a3b8?text=Blog+2", image_caption: "Blog post", createdAt: "Feb 28, 2025", tags: ["Guide", "Tips"] },
  { id: "demo-3", slug: "Latest Updates and News", title: "Latest Updates and News", image_url: "https://placehold.co/400x300/1e3a5f/94a3b8?text=Blog+3", image_caption: "Blog post", createdAt: "Feb 25, 2025", tags: ["News", "Community"] },
];

const BlogList = ({ theme = "black" }) => {
  const { blog, loading } = useBlogStore();
  useFetchBlog();

  const blogPost = blog.length > 0
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

  const textColor = theme === "white" ? "tw-text-white" : "tw-text-black";
  const backgroundColor = theme === "white" ? "tw-bg-transparent" : "tw-bg-white";
  const mutedColor = theme === "white" ? "tw-text-gray-300" : "tw-text-gray-600";
  const isDemo = blog.length === 0 && !loading;

  return (
    <section className={`tw-py-24 ${backgroundColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2 className={`tw-font-bold tw-text-3xl tw-mb-4 tw-text-center ${textColor}`}>
              Latest Blogs
            </h2>
            {isDemo && (
              <p className={`tw-text-sm tw-text-center tw-mb-6 ${mutedColor}`}>
                Showing demo content for preview.
              </p>
            )}
          </div>
          <div className="col-lg-12">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {loading ? (
                  <p className={`tw-text-center ${mutedColor}`}>Loading blog posts...</p>
                ) : blogPost.length > 0 ? (
                  blogPost.map((post, index) => (
                    <div
                      key={post.id}
                      className={`card !tw-border-l-0 !tw-border-r-0 !tw-border-t-0 !tw-border-gray-200 !tw-rounded-none ${backgroundColor}`}
                      style={{ backgroundColor: theme === "white" ? "transparent" : "white" }}
                    >
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body !tw-px-0 !tw-py-4 tw-flex tw-flex-col">
                            <h5 className="card-title mb-3">
                              <a
                                href={isDemo ? "#" : `/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                                className={textColor}
                              >
                                {post.title}
                              </a>
                            </h5>
                            <div
                              className={`tw-font-semibold tw-text-sm ${
                                theme === "white" ? "tw-text-gray-300" : "tw-text-gray-600"
                              }`}
                            >
                              Tags
                            </div>
                            <ul className="tw-w-full tw-inline-flex tw-flex-wrap tw-gap-2 tw-list-none tw-pl-0 mb-3">
                              {post.tags.map((tag, index) => (
                                <li
                                  key={index}
                                  className={`tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs ${textColor}`}
                                  style={{
                                    backgroundColor: theme === "white" ? "transparent" : "#f3f4f6",
                                    border: theme === "white" ? "1px solid white" : "none",
                                  }}
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                            <div className="tw-w-full mt-auto tw-flex tw-justify-between tw-items-center mb-2">
                              <a
                                className="btn btn-secondary"
                                href={isDemo ? "#" : `/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                                style={{ cursor: "pointer", textDecoration: "none" }}
                              >
                                Read More
                              </a>
                              <div className={`tw-px-2 tw-py-1 tw-rounded-md tw-text-xs tw-gap-2 tw-inline-flex tw-items-center ${theme === "white" ? "tw-bg-white/15 tw-text-gray-200" : "tw-bg-[#673DE6]/15 tw-text-[#a78bfa]"}`}>
                                <div>
                                  <FontAwesomeIcon icon={faCalendar} />
                                </div>
                                <div>{post.createdAt}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-end">
                          <a
                            href={isDemo ? "#" : `/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                            style={{ cursor: "pointer", textDecoration: "none" }}
                            className="tw-inline-flex tw-py-4 tw-pl-4"
                          >
                            {isDemo ? (
                              <img
                                src={post.image_url}
                                alt={post.image_caption}
                                className="tw-h-[200px] tw-w-full tw-object-cover tw-rounded"
                              />
                            ) : (
                              <Image
                                src={post.image_url}
                                alt={post.image_caption}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="tw-h-[200px] tw-w-full tw-object-contain"
                              />
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className={`tw-text-center ${mutedColor}`}>No blog posts available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
