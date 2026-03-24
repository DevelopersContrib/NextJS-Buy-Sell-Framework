import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const Contact = () => {
  const domain = getDomain();
  return (
    <ScriptPageFrame>
      <Script
        src={
          "https://tools.contrib.com/pages/contact?d=" + domain + "&container=contactnew-script"
        }
      />
      <div className="contactnew-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default Contact;
