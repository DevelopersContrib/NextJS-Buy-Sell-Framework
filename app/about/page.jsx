import Script from 'next/script';
console.log('about')
const page = () => {
  return (
    <>

    <Script src="https://tools.contrib.com/pages/aboutnew?d=handyman.com&container=aboutnew-script"/>
       <div className="aboutnew-script"></div>
    </>
   
  )
}

export default page