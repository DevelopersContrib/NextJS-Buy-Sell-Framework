"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const StaticCTAButton = () => {
  return (
    <section className="tw-pt-20 tw-pb-10 py-32">
          <style jsx>{`
        .tw-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
      `}</style>
      <div className="container mx-auto tw-px-4 tw-py-12 sm:tw-py-16 tw-text-center tw-relative tw-overflow-hidden tw-rounded-2xl tw-bg-[#24252d] tw-border tw-border-[#673DE6]/25 tw-backdrop-blur-sm">
        <motion.div
          className="tw-absolute tw-inset-0 tw-opacity-25 tw-pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(103, 61, 230, 0.3), transparent 60%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="tw-relative tw-mb-6">
          <Image
            src="/images/adaotoken.png"
            alt="ADAO Token"
            width={50}
            height={50}
            className="tw-bounce"
          />
        </div>
        <h2 className="tw-text-2xl sm:tw-text-4xl tw-font-bold tw-mb-4 tw-text-white">Seize the Future with ADAO Tokens!</h2>
        <p className="tw-text-base sm:tw-text-lg tw-text-gray-400 tw-mb-10 tw-max-w-2xl tw-mx-auto">
          Don&apos;t miss your chance to be part of the next big leap in digital innovation. With our DEX listing set for February, the value of ADAO Tokens is poised to soar. Secure your tokens today and position yourself at the forefront of the digital agent revolution. Act now and join a community that&apos;s shaping the future of decentralized technology.
        </p>
        <button
          className="tw-bg-[#36373E] hover:tw-bg-[#44454e] tw-text-white tw-font-semibold tw-text-base tw-px-8 tw-py-4 tw-rounded-xl tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-shadow-[#36373E]/35 hover:tw-scale-[1.02] active:tw-scale-[0.98]"
          onClick={() => window.open('https://adao.ai', '_blank')}
        >
          Buy ADAO Tokens Now
        </button>
      </div>
    
    </section>
  );
};

export default StaticCTAButton;