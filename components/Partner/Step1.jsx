import Link from "next/link";
import ErrorBlock from "../ErrorBlock";
import { btnPrimaryDarkSurfaceFull } from "@/lib/themeButtons";
import { inputClass, labelClass } from "@/lib/formTheme";

const requiredSpan = <span className="tw-text-red-600">*</span>;

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
          <h2 className="tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-zinc-900 sm:tw-text-3xl">
            Partner with {domain} today
          </h2>
          <p className="tw-mt-1 tw-text-zinc-600">Create your profile to make a partnership</p>
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
              className={btnPrimaryDarkSurfaceFull}
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
          <p className="tw-text-center tw-text-sm tw-text-zinc-600">
            <Link href="/buy" className="tw-text-blue-600 tw-no-underline tw-transition-colors hover:tw-text-blue-700">
              Or you can buy this domain!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
