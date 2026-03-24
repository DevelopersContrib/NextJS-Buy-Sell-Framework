"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const topBarContainerClass =
  "container tw-mx-auto tw-flex tw-max-w-[1140px] tw-items-center tw-px-4 sm:tw-px-6 lg:tw-px-8";

const Navigation = ({ domain }) => {
  const [showTopHeader, setShowTopHeader] = useState(true);

  const adaoNewsHref = `https://adao.ai/?referral=${domain}`;
  const adaoNewsText =
    "ADAO token is dropping to your Base chain soon! Get ADAO today while it's on sale!";

  return (
    <header className="site-header tw-sticky tw-top-0 tw-z-50 tw-w-full">
      {!showTopHeader && (
        <div className="tw-w-full tw-border-b tw-border-blue-500/25 tw-bg-[#14151a] tw-text-sm tw-text-zinc-200">
          <div
            className={`${topBarContainerClass} tw-min-h-[40px] tw-flex-wrap tw-justify-between tw-gap-y-2 tw-py-2`}
          >
            <div className="tw-flex tw-items-center">
              <a
                href="https://agentdao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-font-semibold tw-text-blue-400 tw-no-underline tw-transition-colors hover:tw-text-blue-300"
              >
                Powered by AgentDao
              </a>
            </div>

            <div className="tw-flex tw-items-center tw-gap-3">
              <Link
                href={`https://contrib.com/to/${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-flex tw-items-center tw-rounded-md tw-bg-white/10 tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-text-white tw-no-underline tw-transition-colors hover:tw-bg-white/15"
              >
                Register
              </Link>
              <Link
                href="https://adao.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-flex tw-items-center tw-rounded-md tw-bg-blue-600 tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-text-white tw-no-underline tw-transition-colors hover:tw-bg-blue-500"
              >
                Buy Adao
              </Link>
              <button
                type="button"
                onClick={() => setShowTopHeader(true)}
                className="tw-inline-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-md tw-border-0 tw-bg-transparent tw-text-lg tw-leading-none tw-text-zinc-400 tw-transition-colors hover:tw-bg-white/10 hover:tw-text-white"
                aria-label="Show announcement"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {showTopHeader && (
        <div className="tw-w-full tw-border-b tw-border-blue-500/30 tw-bg-[#14151a] tw-text-zinc-100">
          <div className={`${topBarContainerClass} tw-min-h-[40px] tw-gap-2 tw-py-2 sm:tw-gap-3`}>
            <span className="tw-shrink-0 tw-rounded-full tw-bg-blue-500/20 tw-px-2.5 tw-py-1 tw-text-xs tw-font-semibold tw-tracking-wide tw-text-blue-200 tw-ring-1 tw-ring-inset tw-ring-blue-400/40 sm:tw-text-sm">
              Flash news
            </span>
            <div className="announcement-marquee tw-flex tw-min-h-[24px] tw-items-center">
              <div className="announcement-marquee__track tw-flex tw-items-center tw-text-zinc-300">
                <span className="announcement-marquee__segment tw-whitespace-nowrap">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-text-zinc-200 tw-no-underline tw-transition-colors hover:tw-text-white hover:tw-underline tw-underline-offset-2"
                    href={adaoNewsHref}
                  >
                    {adaoNewsText}
                  </a>
                </span>
                <span
                  className="announcement-marquee__segment announcement-marquee__segment--clone tw-whitespace-nowrap"
                  aria-hidden="true"
                >
                  <span className="tw-text-zinc-200">{adaoNewsText}</span>
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowTopHeader(false)}
              className="tw-ml-auto tw-inline-flex tw-h-8 tw-w-8 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-md tw-border-0 tw-bg-transparent tw-text-zinc-500 tw-transition-colors hover:tw-bg-white/10 hover:tw-text-white sm:tw-ml-1"
              aria-label="Dismiss announcement"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Navbar
        bg="primary"
        variant="light"
        expand="lg"
        collapseOnSelect
        className="tw-border-b tw-border-zinc-200 tw-py-2"
      >
        <Container className="tw-max-w-[1140px] tw-px-4 sm:tw-px-6 lg:tw-px-8">
          <Navbar.Toggle aria-controls="site-main-nav" className="tw-ms-auto tw-border-zinc-300" />
          <Navbar.Collapse
            id="site-main-nav"
            className="tw-pt-2 lg:tw-justify-center lg:tw-pt-0"
          >
            <Nav className="tw-mx-auto tw-items-center tw-gap-0 lg:tw-gap-1" navbar>
              <Nav.Link as={Link} href="/" eventKey="1">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/blog" eventKey="2">
                Blog
              </Nav.Link>
              <Nav.Link
                href={`https://www.contrib.com/to/${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                eventKey="3"
              >
                Contribute
              </Nav.Link>
              <Nav.Link as={Link} href="/partner" eventKey="4">
                Partner
              </Nav.Link>
              <Nav.Link
                href={`https://advertise.ipartner.com/?domain=${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                eventKey="5"
              >
                Advertise
              </Nav.Link>
              <Nav.Link as={Link} href="/about" eventKey="6">
                About
              </Nav.Link>
              <Nav.Link
                href={`https://domaindirectory.com/servicepage/?domain=${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                eventKey="7"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
