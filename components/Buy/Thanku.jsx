import Image from "next/image";
import {
  faSearch,
  faFile,
  faDesktop,
  faArrowAltCircleRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Thanku() {
  return (
    <>
      <div className="col-xl-12 tw-mx-auto tw-max-w-3xl tw-text-center">
        <Image
          src="https://cdn.vnoc.com/icons/icon-thankyou-800x400.png"
          width={280}
          height={140}
          alt="Thank you"
          className="tw-mb-6 tw-inline-flex"
        />
        <h2 className="tw-mb-6 tw-text-2xl tw-font-semibold tw-text-zinc-900 sm:tw-text-3xl">
          Thank you for submitting your offer.
        </h2>
        <div className="tw-mb-8 tw-space-y-3 tw-text-zinc-600">
          <p className="tw-flex tw-items-center tw-justify-center tw-gap-2">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="tw-h-4 tw-w-4 tw-text-blue-600" />
            You will be receiving three (3) emails from Contrib.
          </p>
          <p className="tw-flex tw-items-center tw-justify-center tw-gap-2">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="tw-h-4 tw-w-4 tw-text-blue-600" />
            Please check your spam box for safe measure.
          </p>
          <p className="tw-text-center tw-text-sm">
            Contrib is our contribution platform and it allows us to get people to help contribute,
            make offer or partner with premium world class brands. You can check your Offer submission
            in your <strong className="tw-text-zinc-800">&quot;My Offers Contrib App&quot;</strong>.
          </p>
          <p className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-pt-2">
            <FontAwesomeIcon icon={faEnvelope} className="tw-h-5 tw-w-5 tw-text-blue-600" />
            <span>Please check your email for your Contrib access.</span>
          </p>
        </div>

        <div className="tw-rounded-2xl tw-border tw-border-zinc-200/90 tw-bg-white/90 tw-p-8 tw-shadow-sm tw-backdrop-blur-sm">
          <h2 className="tw-mb-8 tw-text-2xl tw-font-semibold tw-text-zinc-900">How it works</h2>
          <div className="row g-4 gy-4">
            <div className="col-xl-4 tw-text-center">
              <div className="tw-mb-4 tw-inline-flex tw-h-20 tw-w-20 tw-items-center tw-justify-center tw-rounded-xl tw-bg-blue-50 tw-text-blue-600">
                <FontAwesomeIcon icon={faSearch} className="tw-h-8 tw-w-8" />
              </div>
              <h3 className="tw-mb-1 tw-text-lg tw-font-semibold tw-text-zinc-900">Step 1</h3>
              <h5 className="tw-mb-2 tw-text-base tw-font-medium tw-text-zinc-700">
                Browse the Marketplace
              </h5>
              <p className="tw-mb-0 tw-text-sm tw-text-zinc-600">
                Browse the marketplace and search for sites to submit offers.
              </p>
            </div>
            <div className="col-xl-4 tw-text-center">
              <div className="tw-mb-4 tw-inline-flex tw-h-20 tw-w-20 tw-items-center tw-justify-center tw-rounded-xl tw-bg-blue-50 tw-text-blue-600">
                <FontAwesomeIcon icon={faFile} className="tw-h-8 tw-w-8" />
              </div>
              <h3 className="tw-mb-1 tw-text-lg tw-font-semibold tw-text-zinc-900">Step 2</h3>
              <h5 className="tw-mb-2 tw-text-base tw-font-medium tw-text-zinc-700">Submit an Offer</h5>
              <p className="tw-mb-0 tw-text-sm tw-text-zinc-600">
                Click on submit offer and fill up the form.
              </p>
            </div>
            <div className="col-xl-4 tw-text-center">
              <div className="tw-mb-4 tw-inline-flex tw-h-20 tw-w-20 tw-items-center tw-justify-center tw-rounded-xl tw-bg-blue-50 tw-text-blue-600">
                <FontAwesomeIcon icon={faDesktop} className="tw-h-8 tw-w-8" />
              </div>
              <h3 className="tw-mb-1 tw-text-lg tw-font-semibold tw-text-zinc-900">Step 3</h3>
              <h5 className="tw-mb-2 tw-text-base tw-font-medium tw-text-zinc-700">View Offers</h5>
              <p className="tw-mb-0 tw-text-sm tw-text-zinc-600">
                View all your offer applications that you have submitted here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
