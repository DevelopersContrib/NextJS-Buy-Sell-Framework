import ErrorBlock from "../ErrorBlock";
import {
  btnPrimaryDarkSurfaceGrid,
  btnSecondaryDarkSurfaceGrid,
} from "@/lib/themeButtons";
import { inputClass, labelClass } from "@/lib/formTheme";

const requiredSpan = <span className="tw-text-red-600">*</span>;

export default function Step3({ data, err, handleSubmit, handleChange, prevStep }) {
  return (
    <>
      <div className="row">
        <div className="col-xl-12 tw-text-center tw-mb-6">
          <h2 className="tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-zinc-900 sm:tw-text-3xl">
            Complete your offer
          </h2>
          <p className="tw-mt-1 tw-text-zinc-600">
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
              Company URL <small className="tw-text-zinc-500">( https:// )</small>
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
          <p className="tw-mb-6 tw-text-sm tw-text-zinc-600">
            By clicking the button below, I understand that the offer that I am about to submit is
            binding and I agree to Ecorp domain name sales and rental terms.
          </p>
          <div className="tw-grid tw-grid-cols-2 tw-gap-4">
            <button
              type="button"
              className={btnSecondaryDarkSurfaceGrid}
              onClick={prevStep}
            >
              Back
            </button>
            <button
              type="button"
              className={btnPrimaryDarkSurfaceGrid}
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
