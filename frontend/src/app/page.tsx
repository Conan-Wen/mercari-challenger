import { Suspense } from 'react'
import { MobileHeader } from '@/components/mobile-header'
import { DateSelector } from '@/components/date-selector'
import { JobList } from '@/components/job-list'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import { fetchArticles } from './actions/fetchArticles'
import { ClientSwipeableJobCard } from '@/components/client-swipeable-job-card'
import Image from 'next/image';

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
          <div className="relative w-full">
            <Image
              src="/fresh_man.svg"
              alt="初めての方はこちら"
              width={367}
              height={129}
              className="w-full h-auto"
              priority
            />
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

