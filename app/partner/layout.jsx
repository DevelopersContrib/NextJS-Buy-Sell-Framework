
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function PartnerLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
