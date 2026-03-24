import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const Staffing = () => {
  const domain = getDomain();
  return (
    <ScriptPageFrame>
      <Script
        src={
          "https://tools.contrib.com/pages/staffing?d=" + domain + "&container=staffing-script"
        }
      />
      <div className="staffing-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default Staffing;
