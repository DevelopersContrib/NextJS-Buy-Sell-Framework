
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';

export default function PartnerLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
