import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardCards from '../components/dashboard/DashboardCards';
import StudyStreak from '../components/dashboard/StudyStreak';
import DashboardStats from '../components/dashboard/DashboardStats';
import CorrectReviews from '../components/dashboard/CorrectReviews';
import JLPTProgress from '../components/dashboard/JLPTProgress';
import LevelProgress from '../components/dashboard/LevelProgress';
import CommunitySection from '../components/dashboard/CommunitySection';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf5ef] via-[#f8f3ed] to-[#f5f0e8]">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 py-6 relative z-0">
        {/* Welcome Section */}
        <div className="mb-6">
          <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md border-2 border-[#333F72]">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#333F72] mb-1">Welcome back!</h1>
                <p className="text-lg text-[#333F72]/70">Ready to continue your JLPT journey?</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="bg-[#E56E0C] text-white px-3 py-1 rounded-full text-sm font-medium">
                    N3 Level
                  </div>
                  <div className="bg-[#333F72]/10 text-[#333F72] px-3 py-1 rounded-full text-sm font-medium">
                    42 days until exam
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-[#333F72]/10">JLPT</div>
                <div className="mt-2">
                  <img src="https://via.placeholder.com/80x60/4c5a7f/ffffff?text=🍙" alt="onigiri character" className="w-20 h-16 rounded-lg object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Cards - Bento Grid */}
        <div className="mb-6">
          <DashboardCards />
        </div>

        {/* Middle Section - Material Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
          <div className="lg:col-span-8">
            <StudyStreak />
          </div>
          <div className="lg:col-span-4">
            <DashboardStats />
          </div>
        </div>

        {/* JLPT Progress Section */}
        <div className="mb-6">
          <JLPTProgress />
        </div>

        {/* Bottom Section - Material Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
          <div className="lg:col-span-8">
            <CorrectReviews />
          </div>
          <div className="lg:col-span-4">
            <LevelProgress />
          </div>
        </div>

        {/* Final Section - Material Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8">
            <CommunitySection />
          </div>
          <div className="lg:col-span-4">
            <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md h-full border-2 border-[#333F72]">
              <h3 className="text-xl font-bold text-[#333F72] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-[#E56E0C] text-white py-3 rounded-xl font-medium hover:bg-[#d46310] transition-colors shadow-sm">
                  Take Practice Test
                </button>
                <button className="w-full bg-[#333F72] text-white py-3 rounded-xl font-medium hover:bg-[#2a3459] transition-colors shadow-sm">
                  Review Mistakes
                </button>
                <button className="w-full border border-[#333F72] text-[#333F72] py-3 rounded-xl font-medium hover:bg-[#333F72] hover:text-white transition-colors">
                  Study Schedule
                </button>
              </div>
              
              {/* Character Illustration */}
              <div className="mt-6 text-center">
                <img src="https://via.placeholder.com/100x80/4c5a7f/ffffff?text=⚡" alt="quick actions character" className="w-24 h-20 rounded-lg object-cover mx-auto" />
                <p className="text-xs text-[#333F72]/60 mt-2">Quick and easy!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
