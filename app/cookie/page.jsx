import Script from 'next/script';

const page = () => {
  return (
    <>
        <Script src="https://tools.contrib.com/pages/cookie?d=handyman.com&container=cookie-script"/>
        <div className="cookie-script"></div>
    </>
   
  )
}

export default page