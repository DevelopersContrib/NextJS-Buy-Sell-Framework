import Navigation from "./Navigation";
import Footer from "./Footer";
import { getDomain } from "@/lib/data";

/**
 * Nav + main gradient section + footer for embedded script pages (about, contact, etc.).
 */
export default function ScriptPageFrame({ children }) {
  const domain = getDomain();
  return (
    <>
      <Navigation domain={domain} />
      <section className="hero-mesh tw-relative tw-min-h-[calc(100vh-56px-74px)] tw-px-4 tw-py-12 tw-text-zinc-900">
        <div className="container tw-mx-auto tw-max-w-5xl">{children}</div>
      </section>
      <Footer domain={domain} />
    </>
  );
}
