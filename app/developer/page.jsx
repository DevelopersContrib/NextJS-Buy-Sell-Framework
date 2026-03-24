import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const Developer = () => {
  const domain = getDomain();
  return (
    <ScriptPageFrame>
      <Script
        src={
          "https://tools.contrib.com/pages/developer?d=" + domain + "&container=developer-script"
        }
      />
      <div className="developer-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default Developer;
