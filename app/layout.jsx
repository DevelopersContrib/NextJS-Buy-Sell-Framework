import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';


export const metadata = {
  title: 'Welcome to devfund.net',
  description: 'devfund.net - Join our exclusive community of like minded people on devfund.net',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

 
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
