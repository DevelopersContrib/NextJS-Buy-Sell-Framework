import Script from "next/script";
import ScriptPageFrame from "@/components/ScriptPageFrame";
import { getDomain } from "@/lib/data";

const About = () => {
  const domain = getDomain();

  return (
    <ScriptPageFrame>
      <Script
        src={
          "https://tools.contrib.com/pages/aboutnew?d=" + domain + "&container=aboutnew-script"
        }
      />
      <div className="aboutnew-script tw-min-h-[240px]" />
    </ScriptPageFrame>
  );
};

export default About;
