export default function ScreenshotsDemo() {
  return (
    <section className="w-full py-8 bg-[#e9e7e7] flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 w-40 h-24 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#e9e7e7] rounded-full" />
            <div>
              <div className="font-bold text-xs">John Doe</div>
              <div className="text-[10px] text-[#333F72] opacity-70">placeholder@placeholder.com</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 