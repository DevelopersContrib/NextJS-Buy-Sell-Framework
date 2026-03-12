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
      <div className="col-xl-12 tw-text-center tw-max-w-3xl tw-mx-auto">
        <Image
          src="https://cdn.vnoc.com/icons/icon-thankyou-800x400.png"
          width={280}
          height={140}
          alt="Thank you"
          className="tw-inline-flex tw-mb-6"
        />
        <h2 className="tw-mb-6 tw-text-white tw-text-2xl sm:tw-text-3xl tw-font-semibold">
          Thank you for submitting your offer.
        </h2>
        <div className="tw-text-gray-400 tw-space-y-3 tw-mb-8">
          <p className="tw-flex tw-items-center tw-justify-center tw-gap-2">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="tw-w-4 tw-h-4 tw-text-[#673DE6]" />
            You will be receiving three (3) emails from Contrib.
          </p>
          <p className="tw-flex tw-items-center tw-justify-center tw-gap-2">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="tw-w-4 tw-h-4 tw-text-[#673DE6]" />
            Please check your spam box for safe measure.
          </p>
          <p className="tw-text-center tw-text-sm">
            Contrib is our contribution platform and it allows us to get people to help contribute,
            make offer or partner with premium world class brands. You can check your Offer submission
            in your <strong className="tw-text-gray-300">&quot;My Offers Contrib App&quot;</strong>.
          </p>
          <p className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-pt-2">
            <FontAwesomeIcon icon={faEnvelope} className="tw-w-5 tw-h-5 tw-text-[#673DE6]" />
            <span>Please check your email for your Contrib access.</span>
          </p>
        </div>

        <div className="tw-bg-[#24252d] tw-p-8 tw-rounded-2xl tw-border tw-border-[#673DE6]/25">
          <h2 className="tw-text-2xl tw-font-semibold tw-text-white tw-mb-8">How it works</h2>
          <div className="row tw-g-6">
            <div className="col-xl-4 tw-text-center">
              <div className="tw-inline-flex tw-justify-center tw-items-center tw-w-20 tw-h-20 tw-rounded-xl tw-bg-[#673DE6]/20 tw-text-[#673DE6] tw-mb-4">
                <FontAwesomeIcon icon={faSearch} className="tw-w-8 tw-h-8" />
              </div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-white tw-mb-1">Step 1</h3>
              <h5 className="tw-text-base tw-font-medium tw-text-gray-300 tw-mb-2">Browse the Marketplace</h5>
              <p className="tw-text-sm tw-text-gray-500 tw-mb-0">
                Browse the marketplace and search for sites to submit offers.
              </p>
            </div>
            <div className="col-xl-4 tw-text-center">
              <div className="tw-inline-flex tw-justify-center tw-items-center tw-w-20 tw-h-20 tw-rounded-xl tw-bg-[#673DE6]/20 tw-text-[#673DE6] tw-mb-4">
                <FontAwesomeIcon icon={faFile} className="tw-w-8 tw-h-8" />
              </div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-white tw-mb-1">Step 2</h3>
              <h5 className="tw-text-base tw-font-medium tw-text-gray-300 tw-mb-2">Submit an Offer</h5>
              <p className="tw-text-sm tw-text-gray-500 tw-mb-0">
                Click on submit offer and fill up the form.
              </p>
            </div>
            <div className="col-xl-4 tw-text-center">
              <div className="tw-inline-flex tw-justify-center tw-items-center tw-w-20 tw-h-20 tw-rounded-xl tw-bg-[#673DE6]/20 tw-text-[#673DE6] tw-mb-4">
                <FontAwesomeIcon icon={faDesktop} className="tw-w-8 tw-h-8" />
              </div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-white tw-mb-1">Step 3</h3>
              <h5 className="tw-text-base tw-font-medium tw-text-gray-300 tw-mb-2">View Offers</h5>
              <p className="tw-text-sm tw-text-gray-500 tw-mb-0">
                View all your offer applications that you have submitted here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
