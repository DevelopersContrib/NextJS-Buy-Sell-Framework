export const GET = async (request) => {
    try {
        const DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;
        const url = `https://api1.contrib.co/v2/domains/getdomainconfig?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${DOMAIN}`

        const res = await fetch(url)
        
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        
        const c = await res.json()
        
        return new Response(JSON.stringify(c), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch ", { status: 500 })
    }
} 