import Script from 'next/script';
import { getDomain } from '../../lib/data';

const page = async () => {
	const domain = getDomain();
	return (
		<>
			<div >test page</div>
			<Script src={"https://tools.contrib.com/widget/fheader?d="+domain+"&container=fheader-script"}/>
      <div className="fheader-script"></div>
		</>
  )
}

export default page

