import Image from 'next/image'

export default function Logo({ domain, logo }) {
  return (
    <>
      {
        logo ? (
          <Image
            src={logo}
            width={380}
            height={380}
            alt=""
            className="tw-inline-flex tw-max-w-[360px] sm:tw-max-w-[420px] tw-h-auto tw-mb-4 tw-drop-shadow-2xl"
          />
        ) : (
          <h1 className="tw-text-5xl sm:tw-text-6xl md:tw-text-7xl tw-font-extrabold tw-tracking-tight tw-text-white tw-mb-4 tw-drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {domain}
          </h1>
        )
      }
      <p className="tw-text-lg sm:tw-text-xl tw-text-gray-200 tw-font-medium tw-mb-2">
        <a href="https://contrib.com/" className="tw-no-underline tw-text-white hover:tw-text-gray-200 tw-transition-colors">
          Proud Member of CONTRIB
        </a>
        <span className="tw-text-gray-400 tw-mx-2">|</span>
        <a href="https://vnoc.com/" className="tw-no-underline tw-text-white hover:tw-text-gray-200 tw-transition-colors">
          Powered by VNOC
        </a>
      </p>
      <p className="tw-text-base sm:tw-text-lg tw-text-gray-300 tw-max-w-2xl tw-mx-auto tw-leading-relaxed">
        Join our exclusive community of like-minded people on {domain}.
      </p>
    </>
  )
}
