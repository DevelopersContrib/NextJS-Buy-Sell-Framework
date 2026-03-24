import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const Invest = () => {
  const domain = getDomain();
  return (
    <ScriptPageFrame>
      <Script
        src={
          "https://tools.contrib.com/pages/investment?d=" + domain + "&container=invest-script"
        }
      />
      <div className="invest-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default Invest;
