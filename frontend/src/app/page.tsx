import { Suspense } from 'react'
import { MobileHeader } from '@/components/mobile-header'
import { DateSelector } from '@/components/date-selector'
import { JobList } from '@/components/job-list'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import { fetchArticles } from './actions/fetchArticles'
import { ClientSwipeableJobCard } from '@/components/client-swipeable-job-card'

export default async function Page() {
  const articles = await fetchArticles()

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader />
      <main className="pb-16">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">東京都</span>
          </div>
          <Button variant="outline" className="text-blue-500 border-blue-500">
            絞り込み
          </Button>
        </div>
        <DateSelector />
        <div className="px-4 py-4">
          <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 rounded-lg p-6 text-center">
            <span className="text-white font-medium">＼初めての方はこちら／</span>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <JobList articles={articles} />
        </Suspense>
      </main>
      <BottomNav />
      <ClientSwipeableJobCard articles={articles} />
    </div>
  )
}

