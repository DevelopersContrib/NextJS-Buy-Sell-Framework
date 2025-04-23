import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { getData, getDomain, getScript } from "../lib/data";
import ScriptLoader from "../components/ScriptLoader";
import { FaShoppingCart, FaHandshake, FaUsers } from "react-icons/fa";
import StaticCTAButton from "@/components/LatestCTA";
import FomoPopup from "@/components/TokenSalePopup";
import BlogList from "@/modules/blog/BlogList";
import Ai from '../components/Ai';

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

  return (
    <>
      <Navigation domain={domain} />
      <section
        style={{
          backgroundImage: `url('${background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="tw-min-h-[calc(100vh-56px-74px)] tw-bg-cover tw-bg-no-repeat tw-relative tw-text-gray-200 tw-bg-[50%] tw-py-16 tw-flex tw-w-full tw-items-center"
      >
        <div className="tw-bg-[rgba(0,0,0,0.85)] tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-absolute tw-shadow-lg"></div>
        <div className="container tw-relative tw-px-4">
          <div className="row tw-mb-8">
            <div className="col-xl-12 tw-text-center">
              <Logo
                domain={domain}
                logo={c.data.logo}
              />
              <p className="tw-text-lg tw-font-light tw-mt-4">
                Proud Member of CONTRIB | Powered by VNOC
              </p>
            </div>
          </div>
          <div className="row gy-3 gx-md-3">
            <div className="col-xl-4">
              <div className="tw-bg-gray-800 tw-p-8 tw-text-center tw-rounded-md tw-text-white tw-shadow-md tw-transition-transform tw-transform hover:tw-scale-105">
                <FaShoppingCart className="tw-text-4xl tw-mb-4 tw-text-blue-500" />
                <h3 className="mb-0 tw-uppercase tw-text-3xl tw-font-medium">Buy</h3>
                <h4 className="tw-flex tw-mb-5 tw-flex-col tw-text-lg tw-font-medium tw-text-gray-400">
                  {domain}
                </h4>
                <div className="mb-3 d-grid">
                  <Link
                    href="/buy"
                    className="btn btn-primary btn-lg tw-transition-colors hover:tw-bg-blue-700"
                  >
                    {" "}
                    Make An Offer{" "}
                  </Link>
                </div>
                <p>
                  Invest in a premium domain <br /> name to be your brand.{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tw-bg-gray-800 tw-p-8 tw-text-center tw-rounded-md tw-text-white tw-shadow-md tw-transition-transform tw-transform hover:tw-scale-105">
                <FaHandshake className="tw-text-4xl tw-mb-4 tw-text-blue-500" />
                <h3 className="mb-0 tw-uppercase  tw-text-3xl tw-font-medium">PARTNER</h3>
                <h4 className="tw-flex tw-mb-5 tw-flex-col tw-text-lg tw-font-medium tw-text-gray-400">
                  {domain}
                </h4>
                <div className="mb-3 d-grid">
                  <Link
                    href="/partner"
                    className="btn btn-primary btn-lg tw-transition-colors hover:tw-bg-blue-700"
                  >
                    {" "}
                    Submit Partnership{" "}
                  </Link>
                </div>
                <p>Access this premium domain name without the premium price tag. </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tw-bg-gray-800 tw-p-8 tw-text-center tw-rounded-md tw-text-white tw-shadow-md tw-transition-transform tw-transform hover:tw-scale-105">
                <FaUsers className="tw-text-4xl tw-mb-4 tw-text-blue-500" />
                <h3 className="mb-0 tw-uppercase  tw-text-3xl tw-font-medium">JOIN</h3>
                <h4 className="tw-flex tw-mb-5 tw-flex-col tw-text-lg tw-font-medium tw-text-gray-400">
                  {domain} Community
                </h4>
                <div className="mb-3 d-grid">
                  <a
                    target="_blank"
                    href={"https://www.contrib.com/signup/firststep?domain=" + domain}
                    className="btn btn-primary btn-lg tw-transition-colors hover:tw-bg-blue-700"
                  >
                    {" "}
                    Join Now{" "}
                  </a>
                </div>
                <p>
                  Join our community of 150,000 <br /> {domain} members over at Contrib.
                </p>
              </div>
            </div>
          </div>

          <StaticCTAButton />
          
          <BlogList theme="white" />
        </div>
      </section>
      <ScriptLoader html={html.data.content} />
      <FomoPopup />
      <Footer domain={domain} />
    </>
  );
}
