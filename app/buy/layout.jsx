
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';


// export const metadata = {
//   title: 'Welcome to devfund.net',
//   description: 'devfund.net - Join our exclusive community of like minded people on devfund.net',
// }

export default function BuyLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
