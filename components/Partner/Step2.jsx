import ErrorBlock from "../ErrorBlock";
import {
  btnPrimaryDarkSurfaceGrid,
  btnSecondaryDarkSurfaceGrid,
} from "@/lib/themeButtons";
import { inputClass, labelClass } from "@/lib/formTheme";

const requiredSpan = <span className="tw-text-red-600">*</span>;

export default function Step2({
  data,
  err,
  handleSubmit,
  handleChange,
  handleChangeCountry,
  prevStep,
  countries,
}) {
  return (
    <>
      <div className="row">
        <div className="col-xl-12 tw-text-center tw-mb-6">
          <h2 className="tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-zinc-900 sm:tw-text-3xl">
            Complete your partnership
          </h2>
          <p className="tw-mt-1 tw-text-zinc-600">
            Please complete your profile in order to present your partnership to the domain owner.
          </p>
        </div>
        <div className="col-xl-12">
          <div className="tw-mb-4">
            <label className={labelClass}>
              Website <small className="tw-text-zinc-500">( https:// )</small> {requiredSpan}
            </label>
            <input
              name="website"
              onChange={handleChange}
              value={data.website}
              type="text"
              className={inputClass}
            />
            {err.validate ? <ErrorBlock msg={err.websiteError} /> : null}
          </div>
          <div className="tw-mb-4">
            <label className={labelClass}>Phone {requiredSpan}</label>
            <input
              name="phone"
              onChange={handleChange}
              value={data.phone}
              type="text"
              className={inputClass}
            />
            {err.validate ? <ErrorBlock msg={err.phoneError} /> : null}
          </div>
          <div className="tw-mb-4">
            <label className={labelClass}>Country {requiredSpan}</label>
            <select
              name="country"
              onChange={handleChangeCountry}
              value={data.country}
              className={inputClass}
            >
              {countries.map((country) => (
                <option key={country.country_id} value={country.country_id}>
                  {country.name}
                </option>
              ))}
            </select>
            {err.validate ? <ErrorBlock msg={err.countryError} /> : null}
          </div>
          <div className="tw-mb-6">
            <label className={labelClass}>City {requiredSpan}</label>
            <input
              name="city"
              onChange={handleChange}
              value={data.city}
              type="text"
              className={inputClass}
            />
            {err.validate ? <ErrorBlock msg={err.cityError} /> : null}
          </div>
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
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
