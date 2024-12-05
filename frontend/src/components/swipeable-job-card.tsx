import { useState, useRef } from 'react'
import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { MapPin, ThumbsDown, ThumbsUp, X, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Article } from '@/types/article'
import { formatTime } from '@/lib/utils'
import addLike from '@/app/actions/addLike'

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
          addLike(currentArticle.id)
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
      <div ref={containerRef} className="relative w-full max-w-sm h-[600px] mx-4">
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
          className="absolute w-full bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="relative h-96">
            <Image
              src={currentArticle.image_url}
              alt={currentArticle.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h2 className="text-2xl font-bold text-white mb-2">{currentArticle.title}</h2>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>{currentArticle.location} ({currentArticle.access})</span>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                {currentArticle.applicant_eligibility}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{formatTime(currentArticle.start_time)} - {formatTime(currentArticle.end_time)}</span>
            </div>
            <div className="text-2xl font-bold">
              ¥{currentArticle.payment}
            </div>
            <div className="text-sm text-gray-600">
              募集: {currentArticle.current_applicants}/{currentArticle.recruitment_quota}人
            </div>
            <Button className="w-full" variant="outline">
              応募前の準備に進む
            </Button>
          </div>
        </animated.div>

        {!leaving && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-16">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-16 w-16 bg-white shadow-lg"
              onClick={() => handleSwipe('left')}
            >
              <ThumbsDown className="h-8 w-8 text-red-500" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-16 w-16 bg-white shadow-lg"
              onClick={() => handleSwipe('right')}
            >
              <ThumbsUp className="h-8 w-8 text-green-500" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

