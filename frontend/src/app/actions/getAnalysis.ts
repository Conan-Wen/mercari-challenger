'use server';

export default async function getAnalysis() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/like/analyze`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return {
            http_status: res.status,
            result: data.result,
        };
    } catch (error) {
        console.error('Failed to fetch analyasis:', error);
        return {
            http_status: 500,
            result: [],
        };
    }
}
