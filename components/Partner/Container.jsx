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
    <section
      style={{ backgroundImage: background ? `url('${background}')` : undefined }}
      className="tw-min-h-[calc(100vh-56px-74px)] tw-relative tw-py-12 tw-px-4 tw-flex tw-w-full tw-items-center tw-bg-[#24252d] tw-bg-cover tw-bg-center tw-bg-no-repeat tw-text-white tw-overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="tw-absolute tw-inset-0 tw-bg-[#24252d]/90" aria-hidden />
      {/* Overlay image + gradient (same as hero) */}
      <div
        className="tw-absolute tw-inset-0 tw-pointer-events-none"
        style={{
          backgroundImage: 'url("/images/overlay.png"), linear-gradient(45deg, #6E436C 25%, #2A4584 75%)',
        }}
        aria-hidden
      />
      <div className="container tw-max-w-6xl tw-relative tw-z-10">
        <div className="tw-text-center tw-mb-10">
          <Logo domain={domain} logo={logo} />
        </div>

        {!success ? (
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-rounded-2xl tw-overflow-hidden tw-border tw-border-[#673DE6]/25 tw-bg-[#24252d] tw-backdrop-blur-sm">
            <div className="tw-flex-[1_1_50%] tw-bg-[#24252d] tw-p-6 sm:tw-p-8 lg:tw-p-10 tw-flex tw-justify-center tw-flex-col tw-border-b lg:tw-border-b-0 lg:tw-border-r tw-border-[#673DE6]/25">
              <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-white tw-mb-6 tw-text-center lg:tw-text-end">
                Invest in a great domain name as part of your brand strategy and take your business to the next level
              </h2>
              <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-8 tw-justify-center lg:tw-justify-end">
                <ul className="tw-list-none tw-p-0 tw-m-0 tw-space-y-3 tw-text-gray-300">
                  <li className="tw-flex tw-items-center tw-gap-3">
                    <span>Secure your online identity</span>
                    <FontAwesomeIcon icon={faCheck} className="tw-w-7 tw-h-7 tw-text-[#673DE6] tw-shrink-0" />
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-3">
                    <span>Enhance your brand equity</span>
                    <FontAwesomeIcon icon={faCheck} className="tw-w-7 tw-h-7 tw-text-[#673DE6] tw-shrink-0" />
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-3">
                    <span>Boost your credibility</span>
                    <FontAwesomeIcon icon={faCheck} className="tw-w-7 tw-h-7 tw-text-[#673DE6] tw-shrink-0" />
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-3">
                    <span>Improve conversion rates</span>
                    <FontAwesomeIcon icon={faCheck} className="tw-w-7 tw-h-7 tw-text-[#673DE6] tw-shrink-0" />
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
