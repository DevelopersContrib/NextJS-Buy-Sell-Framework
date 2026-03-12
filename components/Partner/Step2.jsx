import ErrorBlock from "../ErrorBlock";

const inputClass =
  "tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60";
const labelClass = "tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2";
const requiredSpan = <span className="tw-text-red-400">*</span>;

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
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-white">
            Complete your Partnership
          </h2>
          <p className="tw-text-gray-400 tw-mt-1">
            Please complete your profile in order to present your partnership to the domain owner.
          </p>
        </div>
        <div className="col-xl-12">
          <div className="tw-mb-4">
            <label className={labelClass}>
              Website <small className="tw-text-gray-500">( https:// )</small> {requiredSpan}
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
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
