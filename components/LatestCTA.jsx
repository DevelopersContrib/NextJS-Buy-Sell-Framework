"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const StaticCTAButton = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="tw-relative tw-w-full tw-pt-12 tw-pb-6 sm:tw-pt-16 sm:tw-pb-10" aria-labelledby="adao-cta-heading">
      <div className="tw-relative tw-w-full tw-overflow-hidden tw-border-y tw-border-zinc-200/80 tw-bg-white/90 tw-py-10 tw-backdrop-blur-sm tw-shadow-[0_12px_40px_-24px_rgba(24,24,27,0.2)] tw-ring-1 tw-ring-black/[0.03] sm:tw-py-12 md:tw-py-14">
        <div
          className="tw-pointer-events-none tw-absolute tw-left-1/2 tw-top-0 tw-h-80 tw-w-80 tw--translate-x-1/2 tw--translate-y-1/4 tw-rounded-full tw-blur-3xl tw-opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div className="tw-relative tw-mx-auto tw-flex tw-w-full tw-max-w-3xl tw-flex-col tw-items-center tw-gap-8 tw-px-4 tw-text-center sm:tw-px-6 lg:tw-max-w-4xl">
          <div className="tw-flex tw-shrink-0 tw-justify-center">
            <motion.div
              initial={{ y: 0 }}
              animate={reduceMotion ? { y: 0 } : { y: [0, -5, 0] }}
              transition={{
                duration: 3.5,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="tw-flex tw-h-[4.5rem] tw-w-[4.5rem] tw-items-center tw-justify-center tw-rounded-2xl tw-bg-gradient-to-br tw-from-blue-600 tw-to-indigo-600 tw-p-3 tw-shadow-lg tw-shadow-blue-900/25 tw-ring-2 tw-ring-white/40"
            >
              <Image
                src="/images/adaotoken.png"
                alt=""
                width={52}
                height={52}
                className="tw-h-[3.25rem] tw-w-[3.25rem] tw-object-contain tw-drop-shadow-md"
              />
            </motion.div>
          </div>

          <div className="tw-w-full tw-min-w-0">
            <p className="tw-mb-2 tw-text-[0.6875rem] tw-font-semibold tw-uppercase tw-tracking-[0.14em] tw-text-blue-600 sm:tw-text-xs">
              ADAO Token
            </p>
            <h2
              id="adao-cta-heading"
              className="tw-mb-4 tw-text-balance tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-zinc-900 sm:tw-text-3xl lg:tw-text-4xl"
            >
              Seize the future with ADAO
            </h2>
            <p className="tw-mb-8 tw-text-pretty tw-text-sm tw-leading-relaxed tw-text-zinc-600 sm:tw-text-base lg:tw-text-lg lg:tw-leading-relaxed">
              Don&apos;t miss your chance to ride the next wave of digital innovation. Our DEX
              listing is on the horizon—early supporters can secure ADAO now and help shape the
              decentralized agent ecosystem. Join a community that&apos;s building what comes
              next.
            </p>
            <div className="tw-flex tw-justify-center">
              <button
                type="button"
                className="tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-border-0 tw-bg-blue-600 tw-px-8 tw-py-3.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-md tw-shadow-blue-900/15 tw-transition-all tw-duration-200 hover:tw-bg-blue-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-blue-600 motion-safe:hover:tw--translate-y-0.5 motion-safe:active:tw-scale-[0.98]"
                onClick={() =>
                  window.open("https://adao.ai", "_blank", "noopener,noreferrer")
                }
              >
                Buy ADAO tokens
                <svg
                  className="tw-h-4 tw-w-4 tw-opacity-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticCTAButton;
