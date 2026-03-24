import Link from "next/link"

const Footer = ({ domain }) => {
  return (
    <footer className="tw-bg-zinc-950 tw-text-zinc-400 tw-py-12 tw-border-t tw-border-zinc-800">
      <div className="container tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-10">
        <div>
          <h4 className="tw-text-sm tw-font-semibold tw-text-zinc-100 tw-mb-4 tw-tracking-tight">Company</h4>
          <ul className="tw-list-none tw-space-y-2 tw-pl-0 tw-m-0">
            <li>
              <Link href="/" className="tw-no-underline tw-text-zinc-400 hover:tw-text-blue-400 tw-text-sm tw-transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="tw-no-underline tw-text-zinc-400 hover:tw-text-blue-400 tw-text-sm tw-transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="tw-no-underline tw-text-zinc-400 hover:tw-text-blue-400 tw-text-sm tw-transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="tw-no-underline tw-text-zinc-400 hover:tw-text-blue-400 tw-text-sm tw-transition-colors">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="tw-text-sm tw-font-semibold tw-text-zinc-100 tw-mb-4 tw-tracking-tight">Services</h4>
          <ul className="tw-list-none tw-space-y-2 tw-pl-0 tw-m-0">
            <li>
              <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-zinc-400 hover:tw-text-blue-400 tw-text-sm tw-transition-colors">
                Build
              </Link>
            </li>
            <li>
              <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-zinc-400 hover:tw-text-blue-400 tw-text-sm tw-transition-colors">
                Invest
              </Link>
            </li>
            <li>
              <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-zinc-400 hover:tw-text-blue-400 tw-text-sm tw-transition-colors">
                Manage
              </Link>
            </li>
            <li>
              <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-zinc-400 hover:tw-text-blue-400 tw-text-sm tw-transition-colors">
                Monetize
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="tw-text-sm tw-font-semibold tw-text-zinc-100 tw-mb-4 tw-tracking-tight">Contact</h4>
          <p className="tw-text-sm tw-mb-1 tw-text-zinc-400">Email: contact@{domain}</p>
          <p className="tw-text-sm tw-text-zinc-400">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="tw-text-center tw-mt-10 tw-text-sm tw-text-zinc-400">
        &copy; {new Date().getFullYear()} {domain}. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
