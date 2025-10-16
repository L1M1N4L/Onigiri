import { useState } from 'react';

const JLPTExamPlatform = () => {
  const [currentView, setCurrentView] = useState('exams'); // exams, testSession, stats, logs
  const [selectedExam, setSelectedExam] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Only 3 exam types
  const examTypes = [
    {
      id: 'section-test',
      title: 'Section Based Test',
      description: 'Practice specific sections (Vocabulary, Grammar, Reading, Listening) to target your weak areas and build fundamental skills.',
      duration: '15-20 min',
      questions: '20-30',
      covers: 'Single Section',
      vouchers: '1 Attempt',
      gradient: 'from-blue-500 via-blue-600 to-cyan-600'
    },
    {
      id: 'full-test',
      title: 'Full Mock Test',
      description: 'Complete JLPT simulation with all sections. Experience the real exam format with proper timing and difficulty progression.',
      duration: '60-75 min',
      questions: '90-110',
      covers: 'All 4 Sections',
      vouchers: '1 Attempt',
      gradient: 'from-purple-500 via-purple-600 to-pink-600'
    },
    {
      id: 'quick-test',
      title: 'Quick Test (Adaptive)',
      description: 'AI-powered adaptive test that analyzes your full test performance and generates targeted questions focusing on your identified pain points.',
      duration: '10 min',
      questions: '15',
      covers: 'Weak Areas Only',
      vouchers: 'Unlimited',
      gradient: 'from-orange-500 via-red-500 to-pink-600'
    }
  ];

  // Sidebar Component
  const Sidebar = () => (
    <>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-white">JLPT Practice</h1>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400">
              <span className="text-xl">✕</span>
            </button>
          </div>
          
          <nav className="space-y-2">
            <button
              onClick={() => {setCurrentView('exams'); setSidebarOpen(false);}}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'exams' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span className="text-lg">📚</span>
              <span className="font-medium">Exams</span>
            </button>
            
            <button
              onClick={() => {setCurrentView('stats'); setSidebarOpen(false);}}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'stats' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span className="text-lg">📊</span>
              <span className="font-medium">Statistics</span>
            </button>
            
            <button
              onClick={() => {setCurrentView('logs'); setSidebarOpen(false);}}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'logs' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span className="text-lg">📝</span>
              <span className="font-medium">Exam Logs</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );

  // Exams List View
  const ExamsView = () => (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-400">
              <span className="text-xl">☰</span>
            </button>
            <h1 className="text-3xl font-bold">JLPT Practice Exams</h1>
          </div>
          <p className="text-slate-400">Choose an exam type to begin your practice session</p>
        </div>
      </div>

      <div className="px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-6">
          {examTypes.map((exam) => (
            <div
              key={exam.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all"
            >
              <div className="relative">
                {/* Background Image/Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exam.gradient}`}>
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                    {/* Placeholder for image - you'll replace this with actual images */}
                    <div className="w-80 h-80 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-9xl opacity-30">
                          {exam.id === 'section-test' ? '📚' : exam.id === 'full-test' ? '📝' : '⚡'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="relative p-8 min-h-[400px] flex flex-col justify-between">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4 text-white">{exam.title}</h2>
                    <p className="text-white/90 leading-relaxed">{exam.description}</p>
                  </div>

                  <div className="max-w-2xl">
                    <div className="flex items-center gap-8 text-sm text-white/90">
                      <div>
                        <span className="uppercase tracking-wider opacity-80">Related Job Role Path</span>
                        <span className="ml-3 font-semibold">JLPT Certification</span>
                      </div>
                      <div>
                        <span className="uppercase tracking-wider opacity-80">Covers</span>
                        <span className="ml-3 font-semibold">{exam.covers}</span>
                      </div>
                      <div>
                        <span className="uppercase tracking-wider opacity-80">Exam Vouchers Required</span>
                        <span className="ml-3 font-semibold">{exam.vouchers}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedExam(exam);
                          setCurrentView('testSession');
                        }}
                        className="text-white hover:text-white/80 transition-colors flex items-center gap-1 group"
                      >
                        <span className="font-semibold">EXAM INFORMATION</span>
                        <span className="text-lg group-hover:translate-x-1 transition-transform">▶</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Stats View
  const StatsView = () => (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="px-8 py-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-400">
              <span className="text-xl">☰</span>
            </button>
            <h1 className="text-3xl font-bold">Statistics</h1>
          </div>
        </div>
      </div>

      <div className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400">Tests Taken</span>
                <span className="text-2xl text-blue-400">📊</span>
              </div>
              <p className="text-4xl font-bold">12</p>
            </div>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400">Average Score</span>
                <span className="text-2xl text-green-400">🏆</span>
              </div>
              <p className="text-4xl font-bold">78%</p>
            </div>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400">Study Time</span>
                <span className="text-2xl text-purple-400">⏰</span>
              </div>
              <p className="text-4xl font-bold">24h</p>
            </div>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400">Current Level</span>
                <span className="text-2xl text-yellow-400">🎯</span>
              </div>
              <p className="text-4xl font-bold">N4</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-6">Section Performance</h2>
            <div className="space-y-6">
              {[
                { name: 'Vocabulary', score: 75, color: 'bg-blue-500' },
                { name: 'Grammar', score: 60, color: 'bg-green-500' },
                { name: 'Reading', score: 85, color: 'bg-purple-500' },
                { name: 'Listening', score: 70, color: 'bg-orange-500' }
              ].map((section) => (
                <div key={section.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{section.name}</span>
                    <span className="text-slate-400">{section.score}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className={`${section.color} h-3 rounded-full transition-all duration-500`} style={{ width: `${section.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Logs View
  const LogsView = () => (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="px-8 py-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-400">
              <span className="text-xl">☰</span>
            </button>
            <h1 className="text-3xl font-bold">Exam Logs</h1>
          </div>
        </div>
      </div>

      <div className="px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-4">
          {[
            { exam: 'JLPT N5 Full Mock Test', date: '2 days ago', score: 82, total: 90, level: 'Full Test', status: 'Passed', gradient: 'from-purple-500 to-pink-600' },
            { exam: 'JLPT N4 Vocabulary Section', date: '5 days ago', score: 20, total: 30, level: 'Section', status: 'Passed', gradient: 'from-blue-500 to-cyan-600' },
            { exam: 'JLPT N5 Grammar Section', date: '1 week ago', score: 15, total: 25, level: 'Section', status: 'Failed', gradient: 'from-blue-500 to-cyan-600' },
            { exam: 'Adaptive Quick Test', date: '1 week ago', score: 12, total: 15, level: 'Quick', status: 'Passed', gradient: 'from-orange-500 to-pink-600' }
          ].map((log, i) => (
            <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:border-slate-600 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${log.gradient} rounded-lg flex items-center justify-center text-lg font-bold`}>
                    {log.level === 'Full Test' ? '📝' : log.level === 'Quick' ? '⚡' : '📚'}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{log.exam}</h3>
                    <p className="text-slate-400 text-sm">{log.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-2 ${
                    log.status === 'Passed' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                  }`}>
                    {log.status}
                  </div>
                  <p className="text-3xl font-bold">{Math.round((log.score / log.total) * 100)}%</p>
                  <p className="text-slate-400 text-sm">{log.score}/{log.total} correct</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Test Session View
  const TestSessionView = () => (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">{selectedExam?.title}</h2>
            <p className="text-sm text-slate-400">Question 1 of {selectedExam?.questions}</p>
          </div>
          <div className="flex items-center gap-2 text-red-400">
            <span className="text-lg">⏰</span>
            <span className="text-2xl font-bold">14:32</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 mb-8">
          <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold mb-6">
            Vocabulary
          </span>
          <h3 className="text-2xl font-bold mb-8">彼は毎日図書館で___。</h3>

          <div className="space-y-3">
            {['勉強します', '勉強しません', '勉強した', '勉強する'].map((option, index) => (
              <button
                key={index}
                className="w-full p-5 text-left rounded-lg border-2 border-slate-600 hover:border-blue-500 hover:bg-slate-750 transition-all"
              >
                <span className="font-semibold mr-3 text-slate-400">{String.fromCharCode(65 + index)}.</span>
                <span className="text-lg">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button className="px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold">
            Previous
          </button>
          
          <div className="flex gap-2 overflow-x-auto max-w-2xl">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  i === 0 ? 'bg-blue-600' : 'bg-slate-700 text-slate-400'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Next
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {currentView === 'exams' && <ExamsView />}
        {currentView === 'stats' && <StatsView />}
        {currentView === 'logs' && <LogsView />}
        {currentView === 'testSession' && <TestSessionView />}
      </div>
    </div>
  );
};

export default JLPTExamPlatform;