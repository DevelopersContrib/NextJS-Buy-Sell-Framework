import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const Privacy = () => {
  const domain = getDomain();
  return (
    <ScriptPageFrame>
      <Script
        src={"https://tools.contrib.com/pages/privacy?d=" + domain + "&container=privacy-script"}
      />
      <div className="privacy-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default Privacy;
