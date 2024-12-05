import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Article } from '@/types/article'

function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':')
  return `${hours}:${minutes}`
}

interface JobListProps {
  articles: Article[]
}

export function JobList({ articles }: JobListProps) {
  if (articles.length === 0) {
    return <div>No articles available at the moment.</div>
  }

  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {articles.map((article: Article) => (
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
              {article.applicant_eligibility}
            </div>
          </div>
          <div className="p-2 space-y-1 flex-grow">
            <h3 className="text-xs font-medium line-clamp-2">{article.title}</h3>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>⏰ {formatTime(article.start_time)} - {formatTime(article.end_time)}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>📍 {article.location} ({article.access})</span>
            </div>
            <div className="text-sm font-bold">
              ¥{article.payment}
            </div>
            <div className="text-xs text-gray-600">
              募集: {article.current_applicants}/{article.recruitment_quota}人
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

