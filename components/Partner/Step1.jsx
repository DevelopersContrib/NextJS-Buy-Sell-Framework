import Link from "next/link";
import ErrorBlock from "../ErrorBlock";

const inputClass =
  "tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60";
const labelClass = "tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2";
const requiredSpan = <span className="tw-text-red-400">*</span>;

export default function Step1({
  domain,
  data,
  err,
  handleSubmit,
  handleChange,
  emailExist,
  emailKeyPress,
}) {
  return (
    <>
      <div className="row">
        <div className="col-xl-12 tw-text-center tw-mb-6">
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-white">
            Partner with {domain} today
          </h2>
          <p className="tw-text-gray-400 tw-mt-1">Create your profile to make a partnership</p>
        </div>
        <div className="col-xl-12">
          <div className="tw-mb-4">
            <label className={labelClass}>
              Partnership Type {requiredSpan}
            </label>
            <select
              name="partnershiptype"
              onChange={handleChange}
              value={data.partnershiptype}
              className={inputClass}
            >
              <option value=""></option>
              <option value="Sponsorship Marketing Partnerships">Sponsor Marketing Partnerships</option>
              <option value="Distribution Marketing Partnerships">Distribution Marketing Partnerships</option>
              <option value="Affiliate Marketing Partnerships">Affiliate Marketing Partnerships</option>
              <option value="Added Value Marketing Partnerships">Added Value Marketing Partnerships</option>
            </select>
            {err.validate ? <ErrorBlock msg={err.partnershiptypeError} /> : null}
          </div>
          <div className="row">
            <div className="col-xl-6 tw-mb-4">
              <label className={labelClass}>First Name {requiredSpan}</label>
              <input
                name="fname"
                onChange={handleChange}
                value={data.fname}
                type="text"
                className={inputClass}
              />
              {err.validate ? <ErrorBlock msg={err.fnameError} /> : null}
            </div>
            <div className="col-xl-6 tw-mb-4">
              <label className={labelClass}>Last Name {requiredSpan}</label>
              <input
                name="lname"
                onChange={handleChange}
                value={data.lname}
                type="text"
                className={inputClass}
              />
              {err.validate ? <ErrorBlock msg={err.lnameError} /> : null}
            </div>
          </div>
          <div className="tw-mb-4">
            <label className={labelClass}>Email Address {requiredSpan}</label>
            <input
              name="email"
              onKeyUp={emailKeyPress}
              onChange={handleChange}
              value={data.email}
              type="text"
              className={inputClass}
            />
            {err.validate ? <ErrorBlock msg={err.emailError} /> : null}
            {emailExist ? <ErrorBlock msg={emailExist} /> : null}
          </div>
          <div className="row">
            <div className="col-xl-6 tw-mb-4">
              <label className={labelClass}>Password {requiredSpan}</label>
              <input
                name="password"
                onChange={handleChange}
                value={data.password}
                type="password"
                className={inputClass}
              />
              {err.validate ? <ErrorBlock msg={err.passwordError} /> : null}
            </div>
            <div className="col-xl-6 tw-mb-4">
              <label className={labelClass}>Confirm Password {requiredSpan}</label>
              <input
                name="cpassword"
                onChange={handleChange}
                value={data.cpassword}
                type="password"
                className={inputClass}
              />
              {err.validate ? <ErrorBlock msg={err.cpasswordError} /> : null}
            </div>
          </div>
          <div className="tw-mb-4">
            <label className={labelClass}>Message {requiredSpan}</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={data.message}
              rows={3}
              className={inputClass + " tw-resize-none"}
            />
            {err.validate ? <ErrorBlock msg={err.messageError} /> : null}
          </div>
          <div className="tw-mb-4">
            <button
              type="button"
              className="tw-w-full tw-py-4 tw-px-6 tw-rounded-xl tw-bg-[#36373E] hover:tw-bg-[#44454e] tw-text-white tw-font-semibold tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#36373E]/50"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
          <p className="tw-text-center tw-text-sm tw-text-gray-400">
            <Link href="/buy" className="tw-no-underline tw-text-[#673DE6] hover:tw-text-[#a78bfa]">
              Or you can buy this domain!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
