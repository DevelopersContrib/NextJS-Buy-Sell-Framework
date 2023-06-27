"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../components/logo';
import { getDomain } from '../../lib/data';

const Partner = () => {
  const domain = getDomain();
  return (
    <section 
      className="tw-min-h-[calc(100vh-56px-74px)] tw-relative tw-py-12 tw-flex tw-w-full tw-items-center tw-bg-white"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 tw-text-center">
            <Logo />
            <p className="tw-text-2xl">
              <a href="https://contrib.com/" className="tw-no-underline text-primary">
              Proud Member of CONTRIB
              </a>
              {" "}|{" "}
              <a href="https://vnoc.com/" className="tw-no-underline text-primary">
              Powered by VNOC
              </a>
            </p>
          </div>
          {/* Start:: Partner Forms */}
          <div className="col-xl-12">
            <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full mb-3">
              <div className="tw-flex-[0_0_50%] tw-bg-[#eaeaea] tw-p-12 tw-flex tw-justify-center tw-flex-col">
                <h2 className="text-lg-end mb-4">
                  Invest in a great domain name as part of your brand strategy and take your business to the next level
                </h2>
                <div className="row">
                  <div className="col-xl-7 text-xl-end">
                    <ul className="list-unstyled">
                      <li>
                        <div className='tw-inline-flex tw-items-center'>
                          Secure your online identity <FontAwesomeIcon icon={faCheck} className='tw-w-4 tw-h-4 tw-ml-2' />
                        </div>
                      </li>
                      <li>
                        <div className='tw-inline-flex tw-items-center'>
                        Enhance your brand equity <FontAwesomeIcon icon={faCheck} className='tw-w-4 tw-h-4 tw-ml-2' />
                        </div>
                      </li>
                      <li>
                        <div className='tw-inline-flex tw-items-center'>
                        Boost your credibility <FontAwesomeIcon icon={faCheck} className='tw-w-4 tw-h-4 tw-ml-2' />
                        </div>
                      </li>
                      <li>
                        <div className='tw-inline-flex tw-items-center'>
                        Improve conversion rates <FontAwesomeIcon icon={faCheck} className='tw-w-4 tw-h-4 tw-ml-2' />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-5">
                    <Image 
                      src="https://cdn.vnoc.com/icons/login-800x800.jpg" 
                      alt=""
                      width={300}
                      height={300}
                      className='img-fluid tw-rounded-full'
                    />
                  </div>
                </div>
              </div>
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
                      <label htmlFor="" className='form-label'>Partnership Type <span className="text-danger">*</span></label>
                      <select className="form-select form-select-lg">
                        <option></option>
                        <option value="Sponsorship Marketing Partnerships">Sponsor Marketing Partnerships</option>
                        <option value="Distribution Marketing Partnerships">Distribution Marketing Partnerships</option>
                        <option value="Affiliate Marketing Partnerships">Affiliate Marketing Partnerships</option>
                        <option value="Added Value Marketing Partnerships">Added Value Marketing Partnerships</option>
                      </select>
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
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Message <span className="text-danger">*</span></label>
                      <textarea rows="3" className="form-control form-control-lg"></textarea>
                    </div>
                    <div className="mb-3 d-grid">
                      <a href="" className="btn btn-primary py-3">
                        NEXT
                      </a>
                    </div>
                    <div className="text-center">
                      <Link href="/buy" className="tw-no-underline">
                        Or you can buy this domain!
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Start:: Step 2 */}
                <div className="row d-none">
                  <div className="col-xl-12 tw-text-center mb-3">
                    <h2>Complete your Partnership</h2>
                    <p>
                    Please complete your profile in order to present your partnership to the domain owner.
                    </p>
                  </div>
                  <div className="col-xl-12">
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Website <small>( https:// )</small> <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Phone <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Country <span className="text-danger">*</span>
                      </label>
                      <select className="form-select form-select-lg">
                        <option></option>
                        <option value="1">Philippines</option>
                        <option value="2">Mars</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="" className='form-label'>City <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="d-grid tw-grid-cols-2 tw-gap-4">
                      <a href="" className="btn btn-light border py-3">BACK</a>
                      <a href="" className="btn btn-primary py-3">NEXT</a>
                    </div>
                  </div>
                </div>
                {/* Start:: Step 3 */}
                <div className="row d-none">
                  <div className="col-xl-12 tw-text-center mb-3">
                    <h2>Complete your Offer</h2>
                    <p>
                    Please complete your profile in order to present your partnership to the domain owner.*
                    </p>
                  </div>
                  <div className="col-xl-12">
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Company Title <span className="text-danger">*</span>
                      </label>
                      <select className="form-select form-select-lg">
                        <option></option>
                        <option value="1">Select</option>
                        <option value="2">Select</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Company Description <span className="text-danger">*</span>
                      </label>
                      <textarea rows="3" className="form-control form-control-lg"></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Company Image URL <small>( https:// )</small> <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className='form-label'>Company URL <small>( https:// )</small> <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="mb-5">
                      <p className="mb-0 small">
                      By clicking the button below, I understand that the offer that I am about to submit is binding and I agree to Ecorp domain name sales and rental terms.
                      </p>
                    </div>
                    <div className="d-grid tw-grid-cols-2 tw-gap-4">
                      <a href="" className="btn btn-light border py-3">BACK</a>
                      <a href="" className="btn btn-primary py-3">SUBMIT</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start:: Thank you message */}
          <div className="col-xl-6 offset-xl-3 tw-text-center d-none">
            <Image 
              src="https://cdn.vnoc.com/background/contrib/handshake.png"
              width={150}
              height={150}
              alt=""
              className='d-inline-flex img-fluid mb-3'
            />
            <h2 className='mb-4 tw-text-blue-300'>Thank you for your <br /> Partnership Application!</h2>
            <div className='tw-text-gray-500'>
              <p>You are now minutes away to joining {domain} team. All you need to do right now is click the link in the Verification email that we have just sent you. If you still haven&apos;t received it, please check your spam inbox. Your verification link will redirect you to our Marketplace hub where you can login and check out your application status.</p>
              <p className='mb-4'>You can now take part in actually building out an asset by sending proposals, partnering with brands, joining teams.</p>
            </div>
            <div className="d-grid">
              <a href="#" target='_blank' className="btn btn-primary py-3">
                Go to your contrib account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner