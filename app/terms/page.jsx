import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const Terms = () => {
  const domain = getDomain();
  return (
    <ScriptPageFrame>
      <Script
        src={"https://tools.contrib.com/pages/terms?d=" + domain + "&container=terms-script"}
      />
      <div className="terms-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default Terms;
