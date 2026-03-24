"use client";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { useFetchBlogSlug } from "@/lib/hooks/useBlogFetcher";
import LoadingState from "@/components/LoadingState";

const BlogSlugPage = ({ id }) => {
  const { blogSlug, loading } = useBlogStore();
  useFetchBlogSlug(id);

  const content =
    blogSlug && blogSlug.length > 0
      ? blogSlug[0].blogPostContent.replace(
          "https://via.placeholder.com/600x400",
          blogSlug[0].imageUrl
        )
      : "";

  return loading ? (
    <section className="hero-mesh tw-min-h-screen tw-py-16">
      <LoadingState />
    </section>
  ) : (
    <section className="hero-mesh tw-min-h-screen tw-py-16">
      <div className="container tw-mb-10 tw-rounded-xl tw-border tw-border-zinc-200 tw-bg-white tw-p-4 tw-shadow-sm">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="custom-blog-content"
        />
      </div>
    </section>
  );
};

export default BlogSlugPage;
