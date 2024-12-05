'use server';

export default async function addLike(articleId: number): Promise<void> {
    console.log('articleId', articleId);
    await fetch(`${process.env.NEXT_PUBLIC_API_URI}/like/${articleId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
