export function getDomain() {
  return process.env.NEXT_PUBLIC_VERCEL_URL;
}

export async function getData() {
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL
  const url = (domain.indexOf('localhost')>-1?'http://':'https://')+domain+'/api/domain'
 
  const res = await fetch(url)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}