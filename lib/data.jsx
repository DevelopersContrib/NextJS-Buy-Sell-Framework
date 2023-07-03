import axios from 'axios'

export function getDomain() {
  return process.env.NEXT_PUBLIC_VERCEL_URL==='localhost:3000'?'javapoint.com':process.env.NEXT_PUBLIC_VERCEL_URL;
}

export async function getData() {
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL
  const url = `https://api1.contrib.co/v2/domains/getdomainconfig?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${domain}`
  const res = await fetch(url)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export async function getScript(url) {
  try{
    const res = await axios.get(url);
    return res.data;
  }catch(e){
    console.log('error getScript',e)
    return {error:'error getScript'}
  }
}