import DashboardHeader from '../components/dashboard/DashboardHeader';

export default function ExamPagesPage() {
  const examLogs = [
    {
      exam: 'JLPT N5 Full Mock Test',
      date: '2 days ago',
      score: 82,
      total: 90,
      level: 'Full Test',
      status: 'Passed',
      gradient: 'from-[#E56E0C] to-[#d46310]'
    },
    {
      exam: 'JLPT N4 Vocabulary Section',
      date: '5 days ago',
      score: 20,
      total: 30,
      level: 'Section',
      status: 'Passed',
      gradient: 'from-[#333F72] to-[#2a3459]'
    },
    {
      exam: 'JLPT N5 Grammar Section',
      date: '1 week ago',
      score: 15,
      total: 25,
      level: 'Section',
      status: 'Failed',
      gradient: 'from-[#333F72] to-[#2a3459]'
    },
    {
      exam: 'Adaptive Quick Test',
      date: '1 week ago',
      score: 12,
      total: 15,
      level: 'Quick',
      status: 'Passed',
      gradient: 'from-[#333F72] to-[#E56E0C]'
    },
    {
      exam: 'JLPT N3 Reading Comprehension',
      date: '2 weeks ago',
      score: 18,
      total: 25,
      level: 'Section',
      status: 'Passed',
      gradient: 'from-[#333F72] to-[#2a3459]'
    },
    {
      exam: 'N4 Listening Practice',
      date: '2 weeks ago',
      score: 22,
      total: 30,
      level: 'Section',
      status: 'Passed',
      gradient: 'from-[#333F72] to-[#2a3459]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf5ef] via-[#f8f3ed] to-[#f5f0e8]">
      <DashboardHeader />
      
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#333F72] mb-2">Exam Pages</h1>
            <p className="text-[#333F72]/70">Your complete exam history and results</p>
          </div>

          {/* Filter Options */}
          <div className="flex gap-4 mb-8">
            <button className="bg-[#E56E0C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d46310] transition-colors">
              All Exams
            </button>
            <button className="bg-[#333F72]/10 text-[#333F72] px-6 py-3 rounded-lg font-medium hover:bg-[#333F72]/20 transition-colors">
              Passed Only
            </button>
            <button className="bg-[#333F72]/10 text-[#333F72] px-6 py-3 rounded-lg font-medium hover:bg-[#333F72]/20 transition-colors">
              Failed Only
            </button>
            <button className="bg-[#333F72]/10 text-[#333F72] px-6 py-3 rounded-lg font-medium hover:bg-[#333F72]/20 transition-colors">
              This Month
            </button>
          </div>

          {/* Exam Logs */}
          <div className="space-y-4">
            {examLogs.map((log, i) => (
              <div key={i} className="bg-[#faf5ef] rounded-2xl border-2 border-[#333F72] p-6 hover:border-[#E56E0C]/50 transition-colors shadow-md hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${log.gradient} rounded-lg flex items-center justify-center text-lg font-bold`}>
                      {log.level === 'Full Test' ? '📝' : log.level === 'Quick' ? '⚡' : '📚'}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#333F72] mb-1">{log.exam}</h3>
                      <p className="text-[#333F72]/60 text-sm">{log.date}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-[#333F72]/60">Level: {log.level}</span>
                        <span className="text-sm text-[#333F72]/60">Questions: {log.total}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-2 ${
                      log.status === 'Passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {log.status}
                    </div>
                    <p className="text-3xl font-bold text-[#333F72]">{Math.round((log.score / log.total) * 100)}%</p>
                    <p className="text-[#333F72]/60 text-sm">{log.score}/{log.total} correct</p>
                    <button className="mt-3 text-[#E56E0C] hover:text-[#d46310] transition-colors font-semibold text-sm">
                      View Details ▶
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="bg-[#333F72] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2a3459] transition-colors">
              Load More Exams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
