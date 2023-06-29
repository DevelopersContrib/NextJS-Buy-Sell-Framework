import { getDomain } from '../../lib/data';

const About = () => {
  const domain = getDomain();
  
  return (
    <>
      <h1>About</h1>
       <div className="aboutnew-script"></div>
    </>
   
  )
}

export default About