import Script from 'next/script';

const page = () => {
  return (
    <>
        <Script src="https://tools.contrib.com/pages/apps?d=handyman.com&container=apps-script"/>
        <div className="apps-script"></div>
    </>
   
  )
}

export default page