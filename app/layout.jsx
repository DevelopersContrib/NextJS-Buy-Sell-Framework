import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { getData } from '../lib/data';

export async function generateMetadata({ params, searchParams }, parent) {
	const c = await getData();
	
	return {
		title: c.data.title,
		description: c.data.description,
	}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
