"use client"

import { useState } from 'react'
import { SwipeableJobCard } from './swipeable-job-card'
import { Article } from '@/types/article'
import { Button } from '@/components/ui/button'

interface ClientSwipeableJobCardProps {
    articles: Article[]
}

export function ClientSwipeableJobCard({ articles }: ClientSwipeableJobCardProps) {
    const [isSwipeableOpen, setIsSwipeableOpen] = useState(false)

    return (
        <>
            <Button
                onClick={() => setIsSwipeableOpen(true)}
                className="fixed bottom-20 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-lg"
            >
                求人をスワイプ
            </Button>
            {isSwipeableOpen && (
                <SwipeableJobCard onClose={() => setIsSwipeableOpen(false)} articles={articles} />
            )}
        </>
    )
}

