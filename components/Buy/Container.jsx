"use client";

import { useState} from "react";
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../components/Logo';
import Thanku from "./Thanku";


const Container = ({domain, logo}) => {
const [success, setSuccess] = useState(false);
  
  return (
    <section 
      className="tw-min-h-[calc(100vh-56px-74px)] tw-relative tw-py-12 tw-flex tw-w-full tw-items-center tw-bg-white"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 tw-text-center">
            <Logo domain={domain} logo={logo} />
          </div>
          {/* Start:: Buy Forms */}
          <div className="col-xl-12 ">
            <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full mb-3">
              <div className="tw-flex-[0_0_50%] tw-p-12">
                {/* Start:: Step 1 */}
                <div className="row ">
                  <div className="col-xl-12 tw-text-center mb-3">
                    <h2>Partner with {domain} today</h2>
                    <p>
                      Create your Profile to make a partnership
                    </p>
                  </div>
                  <div className="col-xl-12">
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Amount <span className="text-danger">*</span></label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="row">
                      <div className="col-xl-6 mb-3">
                        <label htmlFor="" className='form-label'>First Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control form-control-lg" />
                      </div>
                      <div className="col-xl-6 mb-3">
                        <label htmlFor="" className='form-label'>Last Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control form-control-lg" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Email Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="row">
                      <div className="col-xl-6 mb-3">
                        <label htmlFor="" className='form-label'>Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control form-control-lg" />
                      </div>
                      <div className="col-xl-6 mb-3">
                        <label htmlFor="" className='form-label'>Confirm Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control form-control-lg" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 mb-3">
                        <label htmlFor="" className='form-label'>Choose Country <span className="text-danger">*</span></label>
                        <select name="" id="" className="form-select form-select-lg">
                          <option value=""></option>
                        </select>
                      </div>
                      <div className="col-xl-6 mb-3">
                        <label htmlFor="" className='form-label'>Phone <span className="text-danger">*</span></label>
                        <input type="text" className="form-control form-control-lg" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>How do you wish to be contacted? <span className="text-danger">*</span></label>
                      <select name="" id="" className="form-select form-select-lg">
                        <option value=""></option>
                        <option value="SMS">SMS</option>
						<option value="Email">Email</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Message <span className="text-danger">*</span></label>
                      <textarea rows="3" className="form-control form-control-lg"></textarea>
                    </div>
                    <div className="mb-3 d-grid">
                      <a href="" className="btn btn-primary py-3">
                        Submit
                      </a>
                    </div>
                    <div className="text-center">
                      <Link href="/partner" className="tw-no-underline">
                        Or you can partner this domain!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tw-flex-[0_0_50%] tw-bg-[#eaeaea] tw-p-12 tw-flex tw-justify-center tw-items-center tw-flex-col">
                <h2 className="mb-4 tw-text-center tw-text-4xl">
                A great domain name is a great asset
                </h2>
                <p className='tw-text-center'>
                Invest in a great domain name as part of your brand strategy and take your business to the next level
                </p>
                <ul className="list-unstyled">
                  <li>
                    <div className='tw-inline-flex tw-items-center'>
                      <FontAwesomeIcon icon={faCheck} className='tw-w-4 tw-h-4 tw-mr-2 tw-text-blue-500' /> Secure your online identity
                    </div>
                  </li>
                  <li>
                    <div className='tw-inline-flex tw-items-center'>
                    <FontAwesomeIcon icon={faCheck} className='tw-w-4 tw-h-4 tw-mr-2 tw-text-blue-500' /> Enhance your brand equity
                    </div>
                  </li>
                  <li>
                    <div className='tw-inline-flex tw-items-center'>
                    <FontAwesomeIcon icon={faCheck} className='tw-w-4 tw-h-4 tw-mr-2 tw-text-blue-500' /> Boost your credibility
                    </div>
                  </li>
                  <li>
                    <div className='tw-inline-flex tw-items-center'>
                    <FontAwesomeIcon icon={faCheck} className='tw-w-4 tw-h-4 tw-mr-2 tw-text-blue-500' /> Improve conversion rates
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Start:: Thank you message */}
          <Thanku />
          <div className="col-xl-12 py-5">
            <hr />
          </div>
          <div className="col-xl-12">
            <div className="row gy-5">
              <div className="col-xl-6 tw-flex">
                <div className="row tw-items-center">
                  <div className="col-xl-8 text-xl-end">
                    <h4>Select Your Domain</h4>
                    <p className="small">Search Ecorp&apos;s database for the ultimate domain name for your business, project or brand.</p>
                  </div>
                  <div className="col-xl-4">
                    <Image
                      src='https://cdn.vnoc.com/icons/domain.jpg'
                      width={300}
                      height={300}
                      alt=""
                      className='img-fluid tw-rounded-full'
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 tw-flex">
                <div className="row tw-items-center">
                  <div className="col-xl-4">
                    <Image
                      src='https://cdn.vnoc.com/icons/offer.jpg'
                      width={300}
                      height={300}
                      alt=""
                      className='img-fluid tw-rounded-full'
                    />
                  </div>
                  <div className="col-xl-8">
                    <h4>Submit your best offer</h4>
                    <p className="small">We&apos;ll let you know if it&apos;s too low for consideration.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 tw-flex">
                <div className="row tw-items-center">
                  <div className="col-xl-8 text-xl-end">
                    <h4>Agree to the terms</h4>
                    <p className="small">Once the price is decided, agree to the terms of the domain name sales agreement.</p>
                  </div>
                  <div className="col-xl-4">
                    <Image
                      src='https://cdn.vnoc.com/icons/agreement.jpg'
                      width={300}
                      height={300}
                      alt=""
                      className='img-fluid tw-rounded-full'
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 tw-flex">
                <div className="row tw-items-center">
                  <div className="col-xl-4">
                    <Image
                      src='https://cdn.vnoc.com/icons/transfer.jpg'
                      width={300}
                      height={300}
                      alt=""
                      className='img-fluid tw-rounded-full'
                    />
                  </div>
                  <div className="col-xl-8">
                    <h4>Launch your website</h4>
                    <p className="small">Once payment has been confirmed the owner will transfer the domain to you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Container