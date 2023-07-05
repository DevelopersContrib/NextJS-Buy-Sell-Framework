import axios from 'axios'
import { headers } from 'next/headers'

export function getDomain() {
  let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;
  //return process.env.NEXT_PUBLIC_VERCEL_URL==='localhost:3000'?'javapoint.com':process.env.NEXT_PUBLIC_VERCEL_URL;
  //return process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
  const headersList = headers()
  const referrer = headersList.get('host')
  const domainName = referrer.includes("localhost") ? DOMAIN : referrer
  console.log('referrer',referrer)
  return domainName 
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