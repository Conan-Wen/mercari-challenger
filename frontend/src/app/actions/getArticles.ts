'use server'

import { Article } from "@/types/article"

export default async function getArticles() {
    const res = await fetch(`${process.env.API_URI}/article`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    return {
        http_status: res.status,
        articles: (await res.json()) as Article[],
    }
}