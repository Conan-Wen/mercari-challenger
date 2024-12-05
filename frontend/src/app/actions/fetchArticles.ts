'use server'

import { Article } from '@/types/article'

export async function fetchArticles() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/article`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()
        return data as Article[]
    } catch (error) {
        console.error('Failed to fetch articles:', error)
        return []
    }
}

