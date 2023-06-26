
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';

export default function BuyLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
