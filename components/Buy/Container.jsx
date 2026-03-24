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
        <div className="tw-text-center tw-mb-12">
          <Logo domain={domain} logo={logo} />
        </div>

        {success ? (
          <Thanku />
        ) : (
          <Form domain={domain} countries={countries} setSuccess={setSuccess} />
        )}

        <div className="tw-my-12 tw-border-t tw-border-zinc-200/90" />

        <div className="tw-mt-10 tw-grid tw-grid-cols-1 tw-gap-6 md:tw-grid-cols-2 md:tw-gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`tw-flex tw-items-center tw-gap-6 tw-rounded-2xl tw-border tw-border-zinc-200/90 tw-bg-white/80 tw-p-6 tw-shadow-sm tw-backdrop-blur-sm tw-transition-all tw-duration-300 hover:tw-border-blue-200/80 hover:tw-shadow-md ${
                step.align === "right" ? "md:tw-flex-row-reverse" : ""
              }`}
            >
              <div className="tw-flex-1">
                <h4 className="tw-mb-2 tw-text-xl tw-font-semibold tw-text-zinc-900">
                  {step.title}
                </h4>
                <p className="tw-mb-0 tw-text-sm tw-text-zinc-600">
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
