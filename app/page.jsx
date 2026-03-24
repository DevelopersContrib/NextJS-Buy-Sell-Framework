import StaticCTAButton from "@/components/LatestCTA";
import Link from "next/link";
import { ShoppingBag, Handshake, Users } from "lucide-react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import ScriptLoader from "../components/ScriptLoader";
import { getData, getDomain, getScript } from "../lib/data";
// import FomoPopup from "@/components/TokenSalePopup";
import Notification from "@/components/notification/Notification";
import BlogList from "@/modules/blog/BlogList";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const background =
    c.data.background_url !== null
      ? c.data.background_url
      : "https://cdn.vnoc.com/background/tech4.jpg";
  const html = await getScript(
    "https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" +
      encodeURIComponent(domain)
  );

  const cards = [
    {
      icon: ShoppingBag,
      title: "Buy",
      subtitle: domain,
      href: "/buy",
      label: "Make An Offer",
      description: "Invest in a premium domain name to be your brand.",
      accent: "from-blue-600 to-indigo-600",
      iconWrap:
        "tw-bg-blue-600 tw-ring-2 tw-ring-blue-800/40 tw-shadow-sm",
    },
    {
      icon: Handshake,
      title: "Partner",
      subtitle: domain,
      href: "/partner",
      label: "Submit Partnership",
      description: "Access this premium domain name without the premium price tag.",
      accent: "from-indigo-600 to-blue-600",
      iconWrap: "tw-bg-indigo-600 tw-ring-2 tw-ring-indigo-900/40 tw-shadow-sm",
    },
    {
      icon: Users,
      title: "Join",
      subtitle: `${domain} Community`,
      href: `https://www.contrib.com/signup/firststep?domain=${domain}`,
      external: true,
      label: "Join Now",
      description: "Join our community of 150,000 " + domain + " members over at Contrib.",
      accent: "from-sky-500 to-blue-600",
      iconWrap:
        "tw-bg-blue-700 tw-ring-2 tw-ring-blue-900/35 tw-shadow-sm",
    },
  ];

  return (
    <>
      <Navigation domain={domain} />
      <section className="hero-mesh tw-relative tw-flex tw-w-full tw-flex-col tw-items-stretch tw-overflow-hidden tw-text-zinc-900 tw-min-h-[calc(100vh-56px-74px)] tw-pt-8 md:tw-pt-12 tw-pb-24 md:tw-pb-32">
        <div
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-opacity-[0.07] tw-pointer-events-none"
          style={{ backgroundImage: `url('${background}')` }}
          aria-hidden
        />
        <div className="tw-absolute tw-inset-0 hero-grid-light tw-pointer-events-none" aria-hidden />

        <div className="container tw-relative tw-px-4 tw-max-w-6xl tw-z-10">
          <div className="tw-text-center tw-mb-6 sm:tw-mb-8">
            <Logo domain={domain} logo={c.data.logo} />
          </div>

          <div className="row g-4 g-lg-5 tw-justify-content-center">
            {cards.map((item) => {
              const Icon = item.icon;
              const linkClass =
                "tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-w-full tw-py-3.5 tw-px-6 tw-rounded-xl tw-font-semibold tw-text-sm tw-transition-all tw-duration-200 tw-border-0 tw-no-underline tw-cursor-pointer " +
                "tw-bg-blue-600 tw-text-white hover:tw-bg-blue-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-blue-600 " +
                "motion-safe:active:tw-scale-[0.98] tw-shadow-md tw-shadow-blue-900/10 hover:tw-shadow-lg hover:tw-shadow-blue-900/15";
              const linkContent = (
                <>
                  <span>{item.label}</span>
                  <svg className="tw-w-4 tw-h-4 tw-opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              );

              return (
                <div key={item.title} className="col-12 col-xl-4 tw-flex">
                  <div
                    className={
                      "tw-flex tw-h-full tw-min-h-0 tw-w-full tw-flex-col tw-items-center tw-group tw-relative tw-rounded-2xl tw-overflow-hidden " +
                      "tw-bg-white/95 tw-backdrop-blur-[2px] tw-border tw-border-zinc-200/80 tw-px-8 tw-pt-7 tw-pb-8 tw-text-center " +
                      "tw-shadow-md tw-shadow-zinc-900/[0.06] tw-ring-1 tw-ring-black/[0.03] " +
                      "tw-transition-[border-color,box-shadow,transform] tw-duration-300 " +
                      "hover:tw-border-blue-200/70 hover:tw-shadow-xl hover:tw-shadow-blue-900/[0.07] motion-safe:hover:tw--translate-y-1"
                    }
                  >
                    <div
                      className={`tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-1 tw-origin-top tw-bg-gradient-to-r tw-transition-transform tw-duration-300 tw-ease-out group-hover:tw-scale-y-110 ${item.accent}`}
                      aria-hidden
                    />
                    <div
                      className={`tw-inline-flex tw-items-center tw-justify-center tw-w-[4.5rem] tw-h-[4.5rem] tw-shrink-0 tw-rounded-2xl tw-mb-5 tw-text-white tw-shadow-md tw-shadow-zinc-900/15 ${item.iconWrap}`}
                    >
                      <Icon
                        className="tw-h-9 tw-w-9 tw-shrink-0"
                        strokeWidth={2.25}
                        absoluteStrokeWidth
                        aria-hidden
                      />
                    </div>
                    <h3 className="tw-mb-1.5 tw-text-xl tw-font-semibold tw-tracking-tight tw-text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="tw-mb-4 tw-text-xs tw-font-medium tw-uppercase tw-tracking-wider tw-text-zinc-500">
                      {item.subtitle}
                    </p>
                    <p className="tw-mb-0 tw-flex-1 tw-text-sm tw-text-zinc-600 tw-leading-relaxed tw-max-w-[22rem]">
                      {item.description}
                    </p>
                    <div className="tw-mt-8 tw-w-full tw-shrink-0">
                      {item.external ? (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.href}
                          className={linkClass}
                        >
                          {linkContent}
                        </a>
                      ) : (
                        <Link href={item.href} className={linkClass}>
                          {linkContent}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <StaticCTAButton />

        <div className="container tw-relative tw-px-4 tw-max-w-6xl tw-z-10">
          <BlogList theme="blend" />
        </div>
      </section>

      <ScriptLoader html={html.data.content} />
      {/* <FomoPopup /> */}
      <Notification />
      <Footer domain={domain} />
    </>
  );
}
