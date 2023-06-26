import Link from "next/link"
export default function Home() {
  console.log('home')
  return (
    <>
      <section 
        style={{ backgroundImage: `url('https://cdn.vnoc.com/background/tech4.jpg')` }}
        className="tw-min-h-[calc(100vh-56px-74px)] tw-bg-cover tw-bg-no-repeat tw-relative tw-text-white tw-bg-[50%] tw-py-12 tw-flex tw-w-full tw-items-center"
      >
        <div className="tw-bg-[rgba(3,38,51,0.85)] tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-absolute"></div>
        <div className="container tw-relative">
          <div className="row tw-mb-8">
            <div className="col-xl-12 tw-text-center">
              <h1 className="tw-text-5xl font-800">Devfund.net</h1>
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
          </div>
          <div className="row gy-3 gx-md-3">
            <div className="col-xl-4">
              <div className="tw-bg-white tw-p-8 tw-text-center tw-rounded-md tw-text-black">
                <h3 className="mb-0 tw-uppercase ">
                  Buy
                </h3>
                <h4 className="tw-flex tw-mb-5 tw-flex-col tw-text-lg tw-font-medium tw-text-gray-500">
                  Devfund.net
                </h4>
                <div className="mb-3 d-grid">
                  <Link href="/buy" className="btn btn-primary btn-lg"> Make An Offer </Link>
                </div>
                <p>Invest in a premium domain <br /> name to be your brand. </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tw-bg-white tw-p-8 tw-text-center tw-rounded-md tw-text-black">
                <h3 className="mb-0 tw-uppercase ">
                  PARTNER
                </h3>
                <h4 className="tw-flex tw-mb-5 tw-flex-col tw-text-lg tw-font-medium tw-text-gray-500">
                  Devfund.net
                </h4>
                <div className="mb-3 d-grid">
                  <Link href="/partner" className="btn btn-primary btn-lg"> Submit Partnership </Link>
                </div>
                <p>Access this premium domain name without the premium price tag. </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tw-bg-white tw-p-8 tw-text-center tw-rounded-md tw-text-black">
                <h3 className="mb-0 tw-uppercase ">
                  JOIN
                </h3>
                <h4 className="tw-flex tw-mb-5 tw-flex-col tw-text-lg tw-font-medium tw-text-gray-500">
                  Devfund.net Community
                </h4>
                <div className="mb-3 d-grid">
                  <a target="_blank" href="https://www.contrib.com/signup/firststep?domain=devfund.net" className="btn btn-primary btn-lg"> Join Now </a>
                </div>
                <p>Join our community of 150,000 <br /> Devfund.net members over at Contrib.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
