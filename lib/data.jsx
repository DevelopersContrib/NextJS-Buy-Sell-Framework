let API1 = process.env.API1;
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  return DOMAIN
}

export async function getData() {
  const url = `${API1+DOMAIN}`
  const res = await fetch(url)
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}


