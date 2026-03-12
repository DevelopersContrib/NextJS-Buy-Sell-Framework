import Image from "next/image";

export default function Thanku({ domain, emailCode }) {
  return (
    <>
      <div className="tw-max-w-2xl tw-mx-auto tw-text-center">
        <Image
          src="https://cdn.vnoc.com/background/contrib/handshake.png"
          width={140}
          height={140}
          alt=""
          className="tw-inline-flex tw-mb-6"
        />
        <h2 className="tw-mb-6 tw-text-white tw-text-2xl sm:tw-text-3xl tw-font-semibold">
          Thank you for your Partnership Application!
        </h2>
        <div className="tw-text-gray-400 tw-space-y-4 tw-mb-8">
          <p>
            You are now minutes away from joining the {domain} team. All you need to do right now is
            click the link in the verification email that we have just sent you. If you still
            haven&apos;t received it, please check your spam inbox. Your verification link will
            redirect you to our Marketplace hub where you can login and check your application
            status.
          </p>
          <p>
            You can now take part in actually building out an asset by sending proposals, partnering
            with brands, and joining teams.
          </p>
        </div>
        <a
          href={"https://www.contrib.com/account/autologinforms?email=" + emailCode + "&form=partnership"}
          target="_blank"
          rel="noopener noreferrer"
          className="tw-inline-block tw-w-full sm:tw-w-auto tw-py-4 tw-px-8 tw-rounded-xl tw-bg-[#36373E] hover:tw-bg-[#44454e] tw-text-white tw-font-semibold tw-no-underline tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#36373E]/50"
        >
          Go to your Contrib account
        </a>
      </div>
    </>
  );
}
