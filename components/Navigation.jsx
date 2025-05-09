"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = ({ domain }) => {
  const [showTopHeader, setShowTopHeader] = useState(true);

  return (
    <>
      {!showTopHeader && (
        <div className="tw-bg-black tw-text-black tw-text-sm tw-py-2 tw-flex tw-justify-between tw-items-center tw-px-4 lg:tw-px-8">
          <div>
            <a
              href="https://agentdao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-blue-600 tw-font-semibold tw-no-underline"
            >
              Powered by AgentDao
            </a>
          </div>

          <div className="tw-flex tw-items-center tw-gap-4">
            <Link
              href={`https://contrib.com/to/${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-no-underline tw-flex tw-items-center tw-bg-black tw-text-white tw-px-3 tw-py-1 tw-rounded-md hover:tw-bg-gray-800 transition"
            >
              Register
            </Link>
            <Link
              href="https://adao.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-no-underline tw-flex tw-items-center tw-bg-black tw-text-white tw-px-3 tw-py-1 tw-rounded-md hover:tw-bg-gray-800 transition"
            >
              Buy Adao
            </Link>
            <button
              onClick={() => setShowTopHeader(false)}
              className="tw-text-black hover:tw-text-white tw-text-lg tw-font-bold btn btn-dark"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {showTopHeader && (
        <section className="tw-w-full tw-bg-[#1A122A] tw-text-white tw-fixed tw-top-0 tw-z-50">
          <div className="container tw-overflow-hidden tw-items-center tw-flex">
            <marquee
              direction="left"
              height="33px"
              className="tw-text-sm tw-flex tw-gap-2 tw-items-center"
            >
              <span className="tw-inline-flex tw-text-[#00f6ff] tw-mr-2">
                Flash News!
              </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                class="tw-text-white/90 hover:tw-text-white tw-transition-colors tw-inline-flex tw-items-center blink"
                href={`https://adao.ai/?referral=${domain}`}
              >
                ADAO token is dropping to your Base chain soon! Get ADAO today
                while it&apos;s on sale!
              </a>
            </marquee>
          </div>
        </section>
      )}

      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <Nav.Link
                href={`https://www.contrib.com/to/${domain}`}
                target="_blank"
              >
                Contribute
              </Nav.Link>
              <Link href="/partner" className="nav-link">
                Partner
              </Link>
              <Link
                href={`https://advertise.ipartner.com/?domain=${domain}`}
                className="nav-link"
                target="_blank"
              >
                Advertise
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Nav.Link
                href={`https://domaindirectory.com/servicepage/?domain=${domain}`}
                target="_blank"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
