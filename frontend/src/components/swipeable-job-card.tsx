"use client"

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { MapPin, ThumbsDown, ThumbsUp, X, Train, Bus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Article } from '@/types/article'

interface SwipeableJobCardProps {
  onClose: () => void
  articles: Article[]
}

export function SwipeableJobCard({ onClose, articles }: SwipeableJobCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const [{ x, y, rotate }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotate: 0,
  }))

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = Math.hypot(...velocity) > 0.2

    if (!active && trigger) {
      const dir = xDir < 0 ? -1 : 1
      handleSwipe(dir === -1 ? 'left' : 'right')
    } else {
      api.start({
        x: active ? mx : 0,
        y: 0,
        rotate: active ? mx / 10 : 0,
        immediate: active
      })
    }
  }, { from: () => [x.get(), y.get()] })

  const currentArticle = articles[currentIndex]

  const handleSwipe = (direction: 'left' | 'right') => {
    const dir = direction === 'left' ? -1 : 1
    setLeaving(true)
    api.start({
      x: dir * (containerRef.current?.offsetWidth || 500),
      y: 0,
      rotate: dir * 50,
      config: { duration: 300 },
      onRest: () => {
        setLeaving(false)
        if (direction === 'right') {
          console.log("Hello World")
        }
        if (currentIndex < articles.length - 1) {
          setCurrentIndex(prev => prev + 1)
        } else {
          onClose()
        }
        api.start({ x: 0, y: 0, rotate: 0, immediate: true })
      }
    })
  }

  if (!currentArticle) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div ref={containerRef} className="relative w-full max-w-sm mx-4 h-[580px] my-8">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white rounded-full"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <animated.div
          {...bind()}
          style={{
            x,
            y,
            rotate,
            touchAction: 'none'
          }}
          className="absolute w-full h-[480px] bg-white rounded-3xl shadow-xl overflow-hidden mb-4"
        >
          <div className="relative">
            <div className="relative h-56">
              <Image
                src={currentArticle.image_url}
                alt={currentArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                募集人数 {currentArticle.current_applicants}/{currentArticle.recruitment_quota}人
              </div>
            </div>

            <div className="p-3 space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs">
                  販売・接客・サービス
                </span>
                <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs">
                  スタッフ
                </span>
                <span className="px-2 py-0.5 bg-blue-500 text-white rounded-full text-xs">
                  {currentArticle.applicant_eligibility}
                </span>
              </div>

              <h2 className="text-lg font-bold">{currentArticle.title}</h2>

              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5" />
                <span>{currentArticle.location}</span>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
                  <Train className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
                  <Bus className="w-5 h-5" />
                </div>
              </div>

              <Button
                className="w-full bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 text-sm py-1"
                variant="outline"
              >
                応募前の準備に進む
              </Button>
            </div>
          </div>
        </animated.div>

        {!leaving && (
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-8">
            <button
              onClick={() => handleSwipe('left')}
              className="group relative flex h-16 w-24 items-center justify-center bg-white rounded-2xl shadow-lg border-2 border-blue-500 transition-transform hover:scale-105"
            >
              <ThumbsDown className="h-8 w-8 text-blue-500" />
              <div className="absolute -bottom-2 h-4 w-4 rotate-45 border-b-2 border-r-2 border-blue-500 bg-white" />
              <span className="absolute -top-8 font-bold text-blue-500">BAD</span>
            </button>
            <button
              onClick={() => handleSwipe('right')}
              className="group relative flex h-16 w-24 items-center justify-center bg-white rounded-2xl shadow-lg border-2 border-red-500 transition-transform hover:scale-105"
            >
              <ThumbsUp className="h-8 w-8 text-red-500" />
              <div className="absolute -bottom-2 h-4 w-4 rotate-45 border-b-2 border-r-2 border-red-500 bg-white" />
              <span className="absolute -top-8 font-bold text-red-500">GOOD</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

