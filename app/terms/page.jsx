import Script from 'next/script';

const page = () => {
  return (
    <>
        <Script src="https://tools.contrib.com/pages/terms?d=handyman.com&container=terms-script"/>
        <div className="terms-script"></div>
    </>
   
  )
}

export default page