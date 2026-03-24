import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const Cookie = () => {
  const domain = getDomain();
  return (
    <ScriptPageFrame>
      <Script
        src={"https://tools.contrib.com/pages/cookie?d=" + domain + "&container=cookie-script"}
      />
      <div className="cookie-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default Cookie;
