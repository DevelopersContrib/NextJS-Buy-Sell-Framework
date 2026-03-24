import Image from "next/image";
import { btnPrimaryDarkSurfaceFull } from "@/lib/themeButtons";

export default function Thanku({ domain, emailCode }) {
  return (
    <>
      <div className="tw-mx-auto tw-max-w-2xl tw-text-center">
        <Image
          src="https://cdn.vnoc.com/background/contrib/handshake.png"
          width={140}
          height={140}
          alt=""
          className="tw-mb-6 tw-inline-flex"
        />
        <h2 className="tw-mb-6 tw-text-2xl tw-font-semibold tw-text-zinc-900 sm:tw-text-3xl">
          Thank you for your Partnership Application!
        </h2>
        <div className="tw-mb-8 tw-space-y-4 tw-text-zinc-600">
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
          href={
            "https://www.contrib.com/account/autologinforms?email=" +
            emailCode +
            "&form=partnership"
          }
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnPrimaryDarkSurfaceFull} tw-inline-block tw-w-full sm:tw-w-auto`}
        >
          Go to your Contrib account
        </a>
      </div>
    </>
  );
}
