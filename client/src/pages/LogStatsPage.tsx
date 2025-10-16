import DashboardHeader from '../components/dashboard/DashboardHeader';

export default function LogStatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf5ef] via-[#f8f3ed] to-[#f5f0e8]">
      <DashboardHeader />
      
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#333F72] mb-2">Log Statistics</h1>
            <p className="text-[#333F72]/70">Analytics and insights from your exam history</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#333F72] mb-2">24</div>
                <div className="text-sm text-[#333F72]/60">Total Exams Taken</div>
              </div>
            </div>
            <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E56E0C] mb-2">78%</div>
                <div className="text-sm text-[#333F72]/60">Average Score</div>
              </div>
            </div>
            <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#333F72] mb-2">18</div>
                <div className="text-sm text-[#333F72]/60">Passed Exams</div>
              </div>
            </div>
            <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#333F72] mb-2">6</div>
                <div className="text-sm text-[#333F72]/60">Failed Exams</div>
              </div>
            </div>
          </div>

          {/* Performance Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Score Trend Chart */}
            <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
              <h3 className="text-lg font-bold text-[#333F72] mb-4">Score Trend</h3>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[65, 72, 68, 75, 78, 82, 85, 80, 88, 85].map((score, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-[#E56E0C] rounded-t w-8"
                      style={{ height: `${score * 2}px` }}
                    ></div>
                    <span className="text-xs text-[#333F72]/60 mt-2">{score}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Performance */}
            <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
              <h3 className="text-lg font-bold text-[#333F72] mb-4">Section Performance</h3>
              <div className="space-y-4">
                {[
                  { name: 'Vocabulary', score: 85, color: 'bg-blue-500' },
                  { name: 'Grammar', score: 72, color: 'bg-green-500' },
                  { name: 'Reading', score: 88, color: 'bg-purple-500' },
                  { name: 'Listening', score: 75, color: 'bg-orange-500' }
                ].map((section) => (
                  <div key={section.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-[#333F72]">{section.name}</span>
                      <span className="text-[#333F72]/70">{section.score}%</span>
                    </div>
                    <div className="w-full bg-[#333F72]/10 rounded-full h-3">
                      <div className={`${section.color} h-3 rounded-full transition-all duration-500`} style={{ width: `${section.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
            <h3 className="text-lg font-bold text-[#333F72] mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { exam: 'JLPT N3 Full Mock', date: '2 days ago', score: 85, status: 'Passed' },
                { exam: 'N4 Vocabulary Test', date: '5 days ago', score: 78, status: 'Passed' },
                { exam: 'N3 Grammar Practice', date: '1 week ago', score: 65, status: 'Failed' },
                { exam: 'Quick Assessment', date: '1 week ago', score: 82, status: 'Passed' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#333F72]/10">
                  <div>
                    <h4 className="font-semibold text-[#333F72]">{activity.exam}</h4>
                    <p className="text-sm text-[#333F72]/60">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-1 ${
                      activity.status === 'Passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {activity.status}
                    </div>
                    <div className="text-lg font-bold text-[#333F72]">{activity.score}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
