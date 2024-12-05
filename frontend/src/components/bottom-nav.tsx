import { Home, Heart, ClipboardList, CheckCircle, User } from 'lucide-react'

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6" />
          <span className="text-xs">ホーム</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Heart className="w-6 h-6" />
          <span className="text-xs">お気に入り</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <ClipboardList className="w-6 h-6" />
          <span className="text-xs">おしごと</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <CheckCircle className="w-6 h-6" />
          <span className="text-xs">やること</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <User className="w-6 h-6" />
          <span className="text-xs">マイページ</span>
        </button>
      </div>
    </div>
  )
}

