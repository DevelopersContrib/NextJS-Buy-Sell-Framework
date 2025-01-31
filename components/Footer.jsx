import Link from "next/link"

const Footer = ({ domain }) => {
  return (
    <footer className="tw-bg-black/90 tw-text-gray-300 tw-py-8">
      <div className="container tw-grid tw-grid-cols-3 tw-gap-8">
        <div>
          <h4 className="tw-text-lg tw-font-semibold tw-mb-4">Company</h4>
          <ul className="tw-list-none tw-space-y-2">
            <li>
              <Link href="/" className="tw-no-underline tw-text-gray-300 hover:tw-text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="tw-no-underline tw-text-gray-300 hover:tw-text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="tw-no-underline tw-text-gray-300 hover:tw-text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="tw-no-underline tw-text-gray-300 hover:tw-text-white">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="tw-text-lg tw-font-semibold tw-mb-4">Services</h4>
          <ul className="tw-list-none tw-space-y-2">
            <li>
              <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-gray-300 hover:tw-text-white">
                Build
              </Link>
            </li>
            <li>
              <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-gray-300 hover:tw-text-white">
                Invest
              </Link>
            </li>
            <li>
              <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-gray-300 hover:tw-text-white">
                Manage
              </Link>
            </li>
            <li>
              <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-gray-300 hover:tw-text-white">
                Monetize
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="tw-text-lg tw-font-semibold tw-mb-4">Contact</h4>
          <p className="tw-text-sm">Email: contact@{domain}</p>
          <p className="tw-text-sm">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="tw-text-center tw-mt-8">
        &copy; {new Date().getFullYear()} {domain}. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer