import { getData } from '../../../lib/data'

export const GET = async (request) => {
    try {
        const c = await getData();
        return new Response(JSON.stringify(c), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch ", { status: 500 })
    }
} 