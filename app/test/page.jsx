import { getScript } from '../../lib/data';
import ScriptLoader from '../../components/ScriptLoader';


const page = async () => {
  const data1 = 'lorem <b>ipsum</b> <script>console.log("hello...");</script>';	
	const data = await getScript('https://tools.contrib.com/js/testhtmlscript.js');

  return (
		<>
			<div>test page</div>
			<ScriptLoader html={data} />
		</>
  )
}

export default page