
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function BuyLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
