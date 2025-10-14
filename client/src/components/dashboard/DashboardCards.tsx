
export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Today's Practice - Large Card */}
      <div className="md:col-span-2 bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-[#333F72]/60 text-sm mb-1 font-medium">Today's</p>
            <h3 className="text-2xl font-bold text-[#333F72] mb-2">Practice</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-[#E56E0C] text-3xl font-bold">25</p>
              <p className="text-[#333F72]/60 text-sm">questions</p>
            </div>
          </div>
          <div className="relative">
            <img src="https://via.placeholder.com/80x80/4c5a7f/ffffff?text=📚" alt="practice" className="w-20 h-20 rounded-xl object-cover" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#E56E0C] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        </div>
        <p className="text-[#333F72]/70 text-sm mb-4">Continue your JLPT preparation with targeted practice.</p>
        <div className="flex gap-3">
          <button className="flex-1 bg-[#E56E0C] text-white py-2 rounded-xl font-medium hover:bg-[#d46310] transition-colors">
            Start Practice
          </button>
          <button className="flex-1 bg-[#333F72]/10 text-[#333F72] py-2 rounded-xl font-medium hover:bg-[#333F72]/20 transition-colors">
            Mock Test
          </button>
        </div>
      </div>

      {/* Review Sessions - Medium Card */}
      <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <img src="https://via.placeholder.com/60x60/4c5a7f/ffffff?text=🔄" alt="reviews" className="w-16 h-16 rounded-xl object-cover" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#333F72] mb-1">Reviews</h3>
          <p className="text-[#E56E0C] text-2xl font-bold mb-2">12</p>
          <p className="text-[#333F72]/60 text-xs mb-4">items ready</p>
          <button className="w-full bg-green-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-green-600 transition-colors">
            Start Reviews
          </button>
        </div>
      </div>

      {/* Study Plan - Medium Card */}
      <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#333F72] mb-2">Study Plan</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#E56E0C] text-white px-2 py-1 rounded-full text-xs font-medium">N3</span>
            <span className="text-[#333F72]/60 text-xs">Target Level</span>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-[#333F72]">65%</div>
            <div className="text-xs text-[#333F72]/60">Complete</div>
          </div>
        </div>
        <img src="https://via.placeholder.com/150x60/4c5a7f/ffffff?text=📊" alt="forecast" className="w-full h-16 rounded-xl object-cover mb-4" />
        <button className="w-full bg-[#333F72] text-white py-2 rounded-xl text-sm font-medium hover:bg-[#2a3459] transition-colors">
          View Plan
        </button>
      </div>
    </div>
  );
}
