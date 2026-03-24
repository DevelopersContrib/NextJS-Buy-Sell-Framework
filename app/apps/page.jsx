import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const Apps = () => {
  const domain = getDomain();
  return (
    <ScriptPageFrame>
      <Script
        src={"https://tools.contrib.com/pages/apps?d=" + domain + "&container=apps-script"}
      />
      <div className="apps-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default Apps;
