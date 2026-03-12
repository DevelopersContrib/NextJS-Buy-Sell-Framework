"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../components/Logo";
import Form from "./Form";
import Thanku from "./Thanku";

const steps = [
  {
    title: "Select Your Domain",
    description: "Search Ecorp's database for the ultimate domain name for your business, project or brand.",
    image: "https://cdn.vnoc.com/icons/domain.jpg",
    align: "left",
  },
  {
    title: "Submit your best offer",
    description: "We'll let you know if it's too low for consideration.",
    image: "https://cdn.vnoc.com/icons/offer.jpg",
    align: "right",
  },
  {
    title: "Agree to the terms",
    description: "Once the price is decided, agree to the terms of the domain name sales agreement.",
    image: "https://cdn.vnoc.com/icons/agreement.jpg",
    align: "left",
  },
  {
    title: "Launch your website",
    description: "Once payment has been confirmed the owner will transfer the domain to you.",
    image: "https://cdn.vnoc.com/icons/transfer.jpg",
    align: "right",
  },
];

const Container = ({ domain, logo, countries, background }) => {
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
        <div className="tw-text-center tw-mb-12">
          <Logo domain={domain} logo={logo} />
        </div>

        {success ? (
          <Thanku />
        ) : (
          <Form domain={domain} countries={countries} setSuccess={setSuccess} />
        )}

        <div className="tw-border-t tw-border-[#673DE6]/25 tw-my-12" />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mt-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`tw-flex tw-items-center tw-gap-6 tw-p-6 tw-rounded-2xl tw-bg-[#24252d] tw-border tw-border-[#673DE6]/25 tw-backdrop-blur-sm tw-transition-all tw-duration-300 hover:tw-border-[#673DE6]/40 ${
                step.align === "right" ? "md:tw-flex-row-reverse" : ""
              }`}
            >
              <div className="tw-flex-1">
                <h4 className="tw-text-xl tw-font-semibold tw-text-white tw-mb-2">
                  {step.title}
                </h4>
                <p className="tw-text-sm tw-text-gray-400 tw-mb-0">
                  {step.description}
                </p>
              </div>
              <div className="tw-shrink-0">
                <Image
                  src={step.image}
                  width={160}
                  height={160}
                  alt=""
                  className="tw-rounded-xl tw-object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Container;
