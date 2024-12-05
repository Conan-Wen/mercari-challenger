import Image from 'next/image'
import { Heart } from 'lucide-react'
import getArticles from '@/app/actions/getArticles'

function formatTime(timeString: string): string {
  // Split the time string into hours and minutes
  const [hours, minutes] = timeString.split(':')
  return `${hours}:${minutes}`
}

export async function JobList() {
  const { http_status, articles } = await getArticles()

  if (http_status !== 200) {
    return <div>Failed to load articles</div>
  }

  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {articles.map((article) => (
        <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="relative">
            <Image
              src={article.image_url}
              alt={article.title}
              width={200}
              height={100}
              className="w-full h-24 object-cover"
            />
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full">
              <Heart className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs">
              未経験者歓迎
            </div>
          </div>
          <div className="p-2 space-y-1 flex-grow">
            <h3 className="text-xs font-medium line-clamp-2">{article.title}</h3>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>⏰ {formatTime(article.start_time)}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>📍 {article.location}</span>
            </div>
            <div className="text-sm font-bold">
              ¥{Number(article.payment)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

