import ErrorBlock from "../ErrorBlock";

const inputClass =
  "tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60";
const labelClass = "tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2";
const requiredSpan = <span className="tw-text-red-400">*</span>;

export default function Step3({ data, err, handleSubmit, handleChange, prevStep }) {
  return (
    <>
      <div className="row">
        <div className="col-xl-12 tw-text-center tw-mb-6">
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-white">
            Complete your Offer
          </h2>
          <p className="tw-text-gray-400 tw-mt-1">
            Please complete your profile in order to present your partnership to the domain owner.
          </p>
        </div>
        <div className="col-xl-12">
          <div className="tw-mb-4">
            <label className={labelClass}>Company Title {requiredSpan}</label>
            <input
              name="companytitle"
              onChange={handleChange}
              value={data.companytitle}
              type="text"
              className={inputClass}
            />
            {err.validate ? <ErrorBlock msg={err.companytitleError} /> : null}
          </div>
          <div className="tw-mb-4">
            <label className={labelClass}>Company Description {requiredSpan}</label>
            <textarea
              name="companydesc"
              onChange={handleChange}
              value={data.companydesc}
              rows={3}
              className={inputClass + " tw-resize-none"}
            />
            {err.validate ? <ErrorBlock msg={err.companydescError} /> : null}
          </div>
          <div className="tw-mb-4">
            <label className={labelClass}>
              Company Image URL <small className="tw-text-gray-500">( https:// )</small>
            </label>
            <input
              name="companyimg"
              onChange={handleChange}
              value={data.companyimg}
              type="text"
              className={inputClass}
            />
            {err.validate ? <ErrorBlock msg={err.companyimgError} /> : null}
          </div>
          <div className="tw-mb-4">
            <label className={labelClass}>
              Company URL <small className="tw-text-gray-500">( https:// )</small>
            </label>
            <input
              name="companylink"
              onChange={handleChange}
              value={data.companylink}
              type="text"
              className={inputClass}
            />
            {err.validate ? <ErrorBlock msg={err.companylinkError} /> : null}
          </div>
          <p className="tw-text-sm tw-text-gray-500 tw-mb-6">
            By clicking the button below, I understand that the offer that I am about to submit is
            binding and I agree to Ecorp domain name sales and rental terms.
          </p>
          <div className="tw-grid tw-grid-cols-2 tw-gap-4">
            <button
              type="button"
              className="tw-py-4 tw-px-6 tw-rounded-xl tw-border tw-border-[#673DE6]/50 tw-text-[#a78bfa] hover:tw-bg-[#673DE6]/20 tw-font-semibold tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              type="button"
              className="tw-py-4 tw-px-6 tw-rounded-xl tw-bg-[#36373E] hover:tw-bg-[#44454e] tw-text-white tw-font-semibold tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#36373E]/50"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
