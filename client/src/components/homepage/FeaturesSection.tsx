import { FaRocket, FaBook, FaFire, FaComments, FaTrophy, FaChartLine, FaStar, FaUsers, FaBrain, FaGamepad } from 'react-icons/fa';

export default function LearningJourneySection() {
  return (
    <section className="w-full py-12 bg-[#faf5ef] flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full px-6">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-[#333F72] mb-4">
            Master Japanese, <span className="text-[#E56E0C]">Your Way</span>
          </h2>
          <p className="text-[#333F72]/70 text-lg max-w-2xl mx-auto">
            A complete learning ecosystem designed to take you from beginner to JLPT certified
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[120px]">
          
          {/* Featured Card - Daily Practice */}
          <div className="col-span-12 md:col-span-6 row-span-2 bg-gradient-to-br from-[#E56E0C] via-[#f97316] to-[#ea580c] rounded-xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold mb-3">
                🔥 Most Popular
              </div>
              <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                Daily Bite-Sized Lessons
              </h3>
              <p className="text-white/90 text-sm mb-3">
                Master Japanese in just 10 minutes a day with gamified lessons.
              </p>
              <div className="flex gap-2">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs font-semibold">
                  📚 500+ Lessons
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs font-semibold">
                  ⚡ Quick & Fun
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 -bottom-8 text-white/10 text-[80px]">
              <FaBook />
            </div>
          </div>

          {/* AI Chat Card */}
          <div className="col-span-12 md:col-span-3 row-span-2 bg-gradient-to-br from-[#333F72] to-[#1e293b] rounded-xl p-4 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="bg-white/10 backdrop-blur-sm w-8 h-8 rounded-lg flex items-center justify-center mb-2">
              <FaComments className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">AI Chat</h3>
              <p className="text-white/80 text-xs">Practice conversations 24/7</p>
            </div>
          </div>

          {/* Streak Card */}
          <div className="col-span-12 md:col-span-3 row-span-2 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
            <div className="relative z-10 text-center">
              <FaFire className="text-white text-4xl mx-auto mb-2 drop-shadow-lg" />
              <h3 className="text-xl font-black text-white mb-1">365 Day</h3>
              <p className="text-white/90 font-bold text-sm mb-2">Streak Goal</p>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">
                Join 5K+ streak holders
              </div>
            </div>
          </div>

          {/* Progress Analytics */}
          <div className="col-span-6 md:col-span-3 row-span-1 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-3 flex items-center gap-3 shadow-xl">
            <FaChartLine className="text-white text-xl" />
            <div className="text-white text-sm font-bold">Analytics</div>
          </div>

          {/* Community */}
          <div className="col-span-6 md:col-span-3 row-span-1 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl p-3 flex items-center gap-3 shadow-xl">
            <FaUsers className="text-white text-xl" />
            <div className="text-white text-sm font-bold">Community</div>
          </div>

          {/* Gamification */}
          <div className="col-span-6 md:col-span-3 row-span-1 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-3 flex items-center gap-3 shadow-xl">
            <FaGamepad className="text-white text-xl" />
            <div className="text-white text-sm font-bold">Gamified</div>
          </div>

          {/* Smart Learning */}
          <div className="col-span-6 md:col-span-3 row-span-1 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-3 flex items-center gap-3 shadow-xl">
            <FaBrain className="text-white text-xl" />
            <div className="text-white text-sm font-bold">AI-Powered</div>
          </div>

          {/* JLPT Success Card */}
          <div className="col-span-12 md:col-span-6 row-span-1 bg-white rounded-xl p-4 flex items-center justify-between relative overflow-hidden shadow-xl border border-[#333F72]/10">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#333F72] to-[#1e293b] text-white text-lg font-black px-4 py-2 rounded-lg shadow-lg">
                JLPT
              </div>
              <div>
                <div className="text-[#333F72] text-xl font-black mb-1">95% Pass Rate</div>
                <div className="text-[#333F72]/60 text-sm font-medium">Our students consistently excel</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                <FaTrophy className="text-white text-lg" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-[#E56E0C] to-[#ea580c] rounded-lg flex items-center justify-center shadow-lg">
                <FaStar className="text-white text-lg" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}