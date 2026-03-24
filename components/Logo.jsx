import Image from "next/image";

const partnerCardClass =
  "tw-group tw-flex tw-w-full tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-zinc-200/90 tw-bg-white/75 tw-px-3 tw-py-1.5 tw-text-center tw-shadow-sm tw-backdrop-blur-sm tw-transition-all tw-no-underline hover:tw-border-blue-400/50 hover:tw-shadow-md focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-blue-500/45 focus-visible:tw-ring-offset-2 sm:tw-w-auto sm:tw-shrink-0 sm:tw-px-4";

const labelClass =
  "tw-text-[0.625rem] tw-font-medium tw-uppercase tw-tracking-[0.1em] tw-text-zinc-500 sm:tw-text-[0.6875rem]";
const brandClass =
  "tw-text-sm tw-font-semibold tw-tracking-tight tw-text-zinc-900 group-hover:tw-text-blue-700 tw-transition-colors sm:tw-text-base";

export default function Logo({ domain, logo }) {
  return (
    <header className="tw-mx-auto tw-max-w-3xl tw-text-center">
      {logo ? (
        <Image
          src={logo}
          width={380}
          height={380}
          alt={domain}
          className="tw-mx-auto tw-mb-3 tw-inline-flex tw-h-auto tw-max-w-[280px] tw-drop-shadow-sm sm:tw-mb-4 sm:tw-max-w-[360px] md:tw-max-w-[400px]"
        />
      ) : (
        <h1 className="tw-mb-1 tw-text-4xl tw-font-bold tw-tracking-tight tw-text-zinc-900 tw-text-balance sm:tw-mb-2 sm:tw-text-6xl md:tw-text-7xl">
          {domain}
        </h1>
      )}

      <div
        className="tw-mx-auto tw-mt-4 tw-flex tw-w-full tw-max-w-md tw-flex-col tw-items-stretch tw-gap-2 sm:tw-mt-5 sm:tw-max-w-xl sm:tw-flex-row sm:tw-items-stretch sm:tw-justify-center sm:tw-gap-3"
        role="group"
        aria-label="Community and platform"
      >
        <a href="https://contrib.com/" className={partnerCardClass}>
          <span className="tw-inline-block tw-whitespace-nowrap">
            <span className={labelClass}>Proud member of </span>
            <span className={brandClass}>CONTRIB</span>
          </span>
        </a>
        <a href="https://vnoc.com/" className={partnerCardClass}>
          <span className="tw-inline-block tw-whitespace-nowrap">
            <span className={labelClass}>Powered by </span>
            <span className={brandClass}>VNOC</span>
          </span>
        </a>
      </div>

      <p className="tw-mx-auto tw-mt-6 tw-max-w-xl tw-text-pretty tw-text-base tw-leading-relaxed tw-text-zinc-600 sm:tw-mt-8 sm:tw-text-lg">
        Join our exclusive community of like-minded people on{" "}
        <span className="tw-font-medium tw-text-zinc-800">{domain}</span>.
      </p>
    </header>
  );
}
