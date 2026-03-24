"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "../Logo";
import Form from "./Form";
import Thanku from "./Thanku";

const Container = ({ domain, logo, countries, background }) => {
  const [emailCode, setEmailCode] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <section className="hero-mesh tw-relative tw-flex tw-min-h-[calc(100vh-56px-74px)] tw-w-full tw-flex-col tw-items-stretch tw-overflow-hidden tw-px-4 tw-py-12 tw-pb-20 tw-text-zinc-900 md:tw-pb-28">
      <div
        className="tw-pointer-events-none tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-opacity-[0.06]"
        style={
          background ? { backgroundImage: `url('${background}')` } : undefined
        }
        aria-hidden
      />
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 hero-grid-light" aria-hidden />
      <div className="container tw-relative tw-z-10 tw-max-w-6xl">
        <div className="tw-text-center tw-mb-10">
          <Logo domain={domain} logo={logo} />
        </div>

        {!success ? (
          <div className="tw-flex tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-2xl tw-border tw-border-zinc-200/90 tw-bg-white/95 tw-shadow-sm tw-backdrop-blur-md lg:tw-flex-row">
            <div className="tw-flex tw-min-w-0 tw-flex-[1_1_50%] tw-flex-col tw-justify-center tw-border-b tw-border-zinc-200/90 tw-bg-zinc-50/90 tw-p-6 sm:tw-p-8 lg:tw-border-b-0 lg:tw-border-r lg:tw-border-zinc-200/90 lg:tw-p-10">
              <h2 className="tw-mb-6 tw-text-center tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-zinc-900 sm:tw-text-3xl lg:tw-text-end">
                Invest in a great domain name as part of your brand strategy and take your business to the next level
              </h2>
              <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-8 sm:tw-flex-row lg:tw-justify-end">
                <ul className="tw-m-0 tw-list-none tw-space-y-3 tw-p-0 tw-text-zinc-700">
                  <li className="tw-flex tw-items-center tw-gap-3">
                    <FontAwesomeIcon icon={faCheck} className="tw-h-7 tw-w-7 tw-shrink-0 tw-text-blue-600" aria-hidden />
                    <span>Secure your online identity</span>
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-3">
                    <FontAwesomeIcon icon={faCheck} className="tw-h-7 tw-w-7 tw-shrink-0 tw-text-blue-600" aria-hidden />
                    <span>Enhance your brand equity</span>
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-3">
                    <FontAwesomeIcon icon={faCheck} className="tw-h-7 tw-w-7 tw-shrink-0 tw-text-blue-600" aria-hidden />
                    <span>Boost your credibility</span>
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-3">
                    <FontAwesomeIcon icon={faCheck} className="tw-h-7 tw-w-7 tw-shrink-0 tw-text-blue-600" aria-hidden />
                    <span>Improve conversion rates</span>
                  </li>
                </ul>
                <Image
                  src="https://cdn.vnoc.com/icons/login-800x800.jpg"
                  alt=""
                  width={240}
                  height={240}
                  className="tw-rounded-xl tw-object-cover tw-shrink-0"
                />
              </div>
            </div>
            <Form domain={domain} countries={countries} setSuccess={setSuccess} setEmailCode={setEmailCode} />
          </div>
        ) : null}

        {success ? <Thanku domain={domain} emailCode={emailCode} /> : null}
      </div>
    </section>
  );
};

export default Container;
