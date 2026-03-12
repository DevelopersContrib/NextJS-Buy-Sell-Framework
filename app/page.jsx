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
      accent: "from-violet-500 to-[#673DE6]",
    },
    {
      icon: Handshake,
      title: "Partner",
      subtitle: domain,
      href: "/partner",
      label: "Submit Partnership",
      description: "Access this premium domain name without the premium price tag.",
      accent: "from-[#673DE6] to-purple-600",
    },
    {
      icon: Users,
      title: "Join",
      subtitle: `${domain} Community`,
      href: `https://www.contrib.com/signup/firststep?domain=${domain}`,
      external: true,
      label: "Join Now",
      description: "Join our community of 150,000 " + domain + " members over at Contrib.",
      accent: "from-violet-400 to-[#673DE6]",
    },
  ];

  return (
    <>
      <Navigation domain={domain} />
      <section
        style={{ backgroundImage: `url('${background}')` }}
        className="hero-bg-static tw-min-h-[calc(100vh-56px-74px)] tw-bg-cover tw-bg-center tw-bg-no-repeat tw-relative tw-text-white tw-py-20 tw-flex tw-w-full tw-items-center tw-overflow-hidden"
      >
        {/* Light opacity overlay so gridlines show through */}
        <div className="tw-absolute tw-inset-0 tw-bg-[#24252d]/90" aria-hidden />
        <div className="tw-absolute tw-inset-0 hero-grid tw-pointer-events-none" aria-hidden />
        {/* Overlay image + gradient (on top so grid is covered) */}
        <div
          className="tw-absolute tw-inset-0 tw-pointer-events-none"
          style={{
            backgroundImage:
              'url("/images/overlay.png"), linear-gradient(45deg, #6E436C 25%, #2A4584 75%)',
          }}
          aria-hidden
        />

        <div className="container tw-relative tw-px-4 tw-max-w-6xl tw-z-10">
          <div className="tw-text-center tw-mb-14">
            <Logo domain={domain} logo={c.data.logo} />
          </div>

          <div className="row g-4 g-lg-5 tw-justify-content-center">
            {cards.map((item) => {
              const Icon = item.icon;
              const linkClass =
                "tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-w-full tw-py-4 tw-px-6 tw-rounded-xl tw-font-semibold tw-text-base tw-transition-all tw-duration-300 tw-border-0 tw-no-underline tw-cursor-pointer " +
                "tw-bg-[#36373E] tw-text-white hover:tw-bg-[#44454e] active:tw-scale-[0.98] tw-shadow-lg hover:tw-shadow-xl";
              const linkContent = (
                <>
                  <span>{item.label}</span>
                  <svg className="tw-w-4 tw-h-4 tw-opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              );

              return (
                <div key={item.title} className="col-12 col-xl-4">
                  <div className="tw-h-full tw-group tw-relative tw-rounded-2xl tw-overflow-hidden tw-bg-[#24252d] tw-border tw-border-[#673DE6]/25 tw-p-8 tw-text-center tw-transition-all tw-duration-300 hover:tw-border-[#673DE6]/40 hover:tw-shadow-2xl hover:tw-shadow-[#673DE6]/30 hover:tw--translate-y-1">
                    {/* Top accent bar */}
                    <div
                      className={`tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-[2px] tw-bg-gradient-to-r ${item.accent}`}
                      aria-hidden
                    />
                    {/* Modern icon: outline circle + gradient fill on hover */}
                    <div className={`tw-inline-flex tw-items-center tw-justify-center tw-w-24 tw-h-24 tw-rounded-xl tw-mb-4 tw-bg-gradient-to-br ${item.accent} tw-text-white tw-shadow-lg tw-ring-2 tw-ring-white/20`}>
                      <Icon className="tw-w-12 tw-h-12" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="tw-mb-1 tw-uppercase tw-tracking-wider tw-text-2xl tw-font-bold tw-text-white">
                      {item.title}
                    </h3>
                    <p className="tw-mb-6 tw-text-sm tw-font-medium tw-text-gray-200">
                      {item.subtitle}
                    </p>
                    <div className="tw-mb-6 tw-d-grid">
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
                    <p className="tw-text-sm tw-text-gray-300 tw-leading-relaxed tw-mb-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <StaticCTAButton />
          <BlogList theme="white" />
        </div>
      </section>

      <ScriptLoader html={html.data.content} />
      {/* <FomoPopup /> */}
      <Notification />
      <Footer domain={domain} />
    </>
  );
}
