import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { getData, getDomain } from '../lib/data';
import Script from 'next/script';

export async function generateMetadata({ params, searchParams }, parent) {
  const c = await getData();
	return {
		title: c.data.title,
		description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author
	}
}

export default function RootLayout({ children }) {
  const domain = getDomain();
  
  return (
    <html lang="en">
      {children}
    </html>
  )
}
