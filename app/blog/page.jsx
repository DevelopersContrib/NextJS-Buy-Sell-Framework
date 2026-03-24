import BlogList from "@/modules/blog/BlogList";

const Blog = async () => {
  return (
    <section className="hero-mesh tw-relative tw-min-h-[calc(100vh-56px-74px)] tw-w-full tw-py-8 tw-text-zinc-900 md:tw-py-12">
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 hero-grid-light" aria-hidden />
      <BlogList theme="blend" />
    </section>
  );
};

export default Blog;
