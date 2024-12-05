export function DateSelector() {
  const dates = [
    { day: "今日", date: "水" },
    { day: "12/5", date: "木" },
    { day: "12/6", date: "金" },
    { day: "12/7", date: "土" },
    { day: "12/8", date: "日" },
    { day: "12/9", date: "月" },
  ]

  return (
    <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar">
      {dates.map((item, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-16 h-16 rounded-lg flex flex-col items-center justify-center
            ${index === 0 ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          <div className="text-sm">{item.day}</div>
          <div className={`text-sm ${item.date === '土' ? 'text-blue-500' : item.date === '日' ? 'text-red-500' : ''} 
            ${index === 0 ? 'text-white' : ''}`}>
            {item.date}
          </div>
        </div>
      ))}
    </div>
  )
}

