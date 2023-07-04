import Script from 'next/script';
import { getDomain,getHost,getScript } from '../../lib/data';

const page = async () => {
	const domain = getDomain();
	const VERCEL_URL = process.env.VERCEL_URL;
	const NEXT_PUBLIC_VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
	const dictionary = Object.entries(process.env);
	//const host = getHost();
	//const referer = await getScript('https://tools.contrib.com/site/gethost');
	//console.log('referer',referer)
	return (
		<>
			<div >test page</div>
			{/*<p>referer: {referer}</p>
			<p>host: {host}</p>*/}
			<p>{VERCEL_URL}</p>
			<p>{NEXT_PUBLIC_VERCEL_URL}</p>
			{/*
			<Script src={"https://tools.contrib.com/widget/fheader?d="+domain+"&container=fheader-script"}/>
      <div className="fheader-script"></div>
			*/}

<			table>
        <thead>
          <tr>
            <th>VAR</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {dictionary.map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
		</>
  )
}

export default page

