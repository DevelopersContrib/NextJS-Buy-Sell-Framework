"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import LoadingState from "../LoadingState";
import ErrorBlock from "../ErrorBlock";

function BuyForm({ domain, countries, setSuccess }) {
  const initialValues = {
    isLoading: false,
    domain: domain,
    amount: 10000,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country_id: countries[0].country_id,
    country: countries[0].name,
    phoneCode: countries[0].phone_code ?? "",
    phone: "",
    message: "",
    contactBy: "",
  };

  const initialErrors = {
    validate: false,
    amountError: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    countryError: "",
    phoneError: "",
    isValidPhone: false,
    messageError: "",
    contactByError: "",
  };

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    const validateErrors = () => {
      const dataErrors = {
        amountError:
          (data.amount ? "" : "Amount is required.") ||
          (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$/g.test(data.amount)
            ? ""
            : "Invalid Amount."),
        firstNameError: data.firstName ? "" : "First name is required.",
        lastNameError: data.lastName ? "" : "Last name is required.",
        emailError:
          (data.email ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? "" : "Invalid Email"),
        passwordError: data.password ? "" : "Password is required.",
        confirmPasswordError:
          (data.confirmPassword ? "" : "Confirm password is required.") ||
          (data.password !== data.confirmPassword ? "Confirm password did not match." : ""),
        countryError: data.country_id ? "" : "Country is required.",
        phoneError:
          (data.phone ? "" : "Phone is required.") ||
          (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$/g.test(data.phone)
            ? ""
            : "Invalid Phone."),
        messageError: data.message ? "" : "Message is required.",
        contactByError: data.contactBy ? "" : "Contact method is required.",
      };
      setErrors(dataErrors);
    };
    validateErrors();
  }, [data]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const countryChange = (e) => {
    const val = e.target.value.split("::");
    setData((prevData) => {
      return {
        ...prevData,
        ...{
          [e.target.name]: val[0],
          country: e.target.options[e.target.selectedIndex].text,
          phone: val[1],
          phoneCode: val[1],
        },
      };
    });
  };

  const contactByChange = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        ...{
          contactBy: event.target.options[event.target.selectedIndex].value,
        },
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = !Object.values(errors).some((v) => v);
    setErrors({ ...errors, ["validate"]: true });
    if (isValid) {
      setData({ ...data, ["isLoading"]: true });
      try {
        // console.log('submit')
        const response = await fetch("/api/buy", {
          method: "POST",
          body: JSON.stringify(data),
        });

        setData({ ...data, ["isLoading"]: false });

        if (response.ok) {
          const res = await response.json();

          if (res.status) {
            setSuccess(true);
            // console.log('done....')
          }
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        console.log(error);
      } finally {
        //set
      }
    }
  };

  const showStep = () => {
    return (
      <div className="col-xl-12">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-gap-0 tw-rounded-2xl tw-overflow-hidden tw-border tw-border-[#673DE6]/25 tw-bg-[#24252d] tw-backdrop-blur-sm">
          <div className="tw-flex-[1_1_50%] tw-p-6 sm:tw-p-8 lg:tw-p-10">
            <div className="row">
              <div className="col-xl-12 tw-text-center tw-mb-6">
                <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-white">
                  Make an offer for {domain}
                </h2>
                <p className="tw-text-gray-400 tw-mt-1">Invest in a premium domain name to be your brand.</p>
              </div>
              <div className="col-xl-12">
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                    Amount <span className="tw-text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="amount"
                    value={data.amount}
                    onChange={handleChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                  />
                  {errors.validate ? <ErrorBlock msg={errors.amountError} /> : null}
                </div>
                <div className="row">
                  <div className="col-xl-6 tw-mb-4">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                      First Name <span className="tw-text-red-400">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={data.firstName}
                      onChange={handleChange}
                      type="text"
                      className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                    />
                    {errors.validate ? <ErrorBlock msg={errors.firstNameError} /> : null}
                  </div>
                  <div className="col-xl-6 tw-mb-4">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                      Last Name <span className="tw-text-red-400">*</span>
                    </label>
                    <input
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
                      type="text"
                      className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                    />
                    {errors.validate ? <ErrorBlock msg={errors.lastNameError} /> : null}
                  </div>
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                    Email Address <span className="tw-text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                  />
                  {errors.validate ? <ErrorBlock msg={errors.emailError} /> : null}
                </div>
                <div className="row">
                  <div className="col-xl-6 tw-mb-4">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                      Password <span className="tw-text-red-400">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                    />
                    {errors.validate ? <ErrorBlock msg={errors.passwordError} /> : null}
                  </div>
                  <div className="col-xl-6 tw-mb-4">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                      Confirm Password <span className="tw-text-red-400">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={data.confirmPassword}
                      onChange={handleChange}
                      className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                    />
                    {errors.validate ? <ErrorBlock msg={errors.confirmPasswordError} /> : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 tw-mb-4">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                      Choose Country <span className="tw-text-red-400">*</span>
                    </label>
                    <select
                      name="country_id"
                      value={data.country_id + "::" + data.phoneCode}
                      onChange={countryChange}
                      className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                    >
                      {countries.map((country) => (
                        <option key={country.country_id} value={country.country_id + "::" + country.phone_code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    {errors.validate ? <ErrorBlock msg={errors.countryError} /> : null}
                  </div>
                  <div className="col-xl-6 tw-mb-4">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                      Phone <span className="tw-text-red-400">*</span>
                    </label>
                    <input
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                      type="text"
                      className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                    />
                    {errors.validate ? <ErrorBlock msg={errors.phoneError} /> : null}
                  </div>
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                    How do you wish to be contacted? <span className="tw-text-red-400">*</span>
                  </label>
                  <select
                    name="contact_by"
                    value={data.contactBy}
                    onChange={contactByChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60"
                  >
                    <option value=""></option>
                    <option value="SMS">SMS</option>
                    <option value="Email">Email</option>
                  </select>
                  {errors.validate ? <ErrorBlock msg={errors.contactByError} /> : null}
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-300 tw-mb-2">
                    Message <span className="tw-text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    rows={3}
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-xl tw-bg-[#2d2e36] tw-border tw-border-white/20 tw-text-white tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#673DE6]/50 focus:tw-border-[#673DE6]/60 tw-resize-none"
                  />
                  {errors.validate ? <ErrorBlock msg={errors.messageError} /> : null}
                </div>
                <div className="tw-mb-4">
                  <button
                    type="button"
                    className="tw-w-full tw-py-4 tw-px-6 tw-rounded-xl tw-bg-[#36373E] hover:tw-bg-[#44454e] tw-text-white tw-font-semibold tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#36373E]/50"
                    onClick={handleSubmit}
                  >
                    Submit Offer
                  </button>
                </div>
                <p className="tw-text-center tw-text-sm tw-text-gray-400">
                  <Link href="/partner" className="tw-no-underline tw-text-[#673DE6] hover:tw-text-[#a78bfa]">
                    Or partner with this domain instead
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="tw-flex-[1_1_50%] tw-bg-[#24252d] tw-p-6 sm:tw-p-8 lg:tw-p-10 tw-flex tw-justify-center tw-items-center tw-flex-col tw-border-l-0 lg:tw-border-l tw-border-t lg:tw-border-t-0 tw-border-[#673DE6]/25">
            <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-white tw-mb-4 tw-text-center">
              A great domain name is a great asset
            </h2>
            <p className="tw-text-gray-400 tw-text-center tw-mb-8">
              Invest in a great domain name as part of your brand strategy and take your business to the next level
            </p>
            <ul className="tw-list-none tw-p-0 tw-m-0 tw-space-y-4">
              <li className="tw-flex tw-items-center tw-gap-3 tw-text-gray-300">
                <FontAwesomeIcon icon={faCheck} className="tw-w-7 tw-h-7 tw-text-[#673DE6] tw-shrink-0" />
                Secure your online identity
              </li>
              <li className="tw-flex tw-items-center tw-gap-3 tw-text-gray-300">
                <FontAwesomeIcon icon={faCheck} className="tw-w-7 tw-h-7 tw-text-[#673DE6] tw-shrink-0" />
                Enhance your brand equity
              </li>
              <li className="tw-flex tw-items-center tw-gap-3 tw-text-gray-300">
                <FontAwesomeIcon icon={faCheck} className="tw-w-7 tw-h-7 tw-text-[#673DE6] tw-shrink-0" />
                Boost your credibility
              </li>
              <li className="tw-flex tw-items-center tw-gap-3 tw-text-gray-300">
                <FontAwesomeIcon icon={faCheck} className="tw-w-7 tw-h-7 tw-text-[#673DE6] tw-shrink-0" />
                Improve conversion rates
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return <>{data.isLoading ? <LoadingState /> : showStep()}</>;
}

export default BuyForm;
