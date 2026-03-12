import Container from '../../components/Partner/Container';
import { getDomain, getData } from '../../lib/data';

const Partner = async () => {
  const domain = getDomain();
  const c = await getData();
  const background = c.data.background_url ?? 'https://cdn.vnoc.com/background/tech4.jpg';

  return (
    <Container domain={domain} logo={c.data.logo} countries={c.data.countries} background={background} />
  )
}

export default Partner