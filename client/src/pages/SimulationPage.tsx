import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';

type ViewType = 'exams' | 'statistics' | 'logStats' | 'examPages' | 'testSession';

interface ExamType {
  id: string;
  title: string;
  description: string;
  duration: string;
  questions: string;
  covers: string;
  vouchers: string;
  gradient: string;
  icon: string;
}

interface ExamLog {
  exam: string;
  date: string;
  score: number;
  total: number;
  level: string;
  status: 'Passed' | 'Failed';
  gradient: string;
}

export default function SimulationPage() {
  const [currentView, setCurrentView] = useState<ViewType>('exams');
  const [selectedExam, setSelectedExam] = useState<ExamType | null>(null);

  const examTypes: ExamType[] = [
    {
      id: 'section-test',
      title: 'Section Based Test',
      description: 'Practice specific sections (Vocabulary, Grammar, Reading, Listening) to target your weak areas and build fundamental skills.',
      duration: '15-20 min',
      questions: '20-30',
      covers: 'Single Section',
      vouchers: '1 Attempt',
      gradient: 'from-[#333F72] via-[#2a3459] to-[#1e2a4a]',
      icon: '📚'
    },
    {
      id: 'full-test',
      title: 'Full Mock Test',
      description: 'Complete JLPT simulation with all sections. Experience the real exam format with proper timing and difficulty progression.',
      duration: '60-75 min',
      questions: '90-110',
      covers: 'All 4 Sections',
      vouchers: '1 Attempt',
      gradient: 'from-[#E56E0C] via-[#d46310] to-[#b8550a]',
      icon: '📝'
    },
    {
      id: 'quick-test',
      title: 'Quick Test (Adaptive)',
      description: 'AI-powered adaptive test that analyzes your full test performance and generates targeted questions focusing on your identified pain points.',
      duration: '10 min',
      questions: '15',
      covers: 'Weak Areas Only',
      vouchers: 'Unlimited',
      gradient: 'from-[#333F72] via-[#E56E0C] to-[#d46310]',
      icon: '⚡'
    }
  ];

  const examLogs: ExamLog[] = [
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
    }
  ];

  const sidebarItems = [
    {
      section: 'Navigation',
      items: [
        { id: 'exams', label: 'Exams', icon: '📚', count: null, isActive: false },
        { id: 'statistics', label: 'Statistics', icon: '📊', count: null, isActive: false }
      ]
    }
  ];

  const renderExamsView = () => (
    <div className="space-y-8">
      {examTypes.map((exam) => (
        <div
          key={exam.id}
          className="bg-white rounded-2xl border-2 border-[#333F72]/20 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-[#E56E0C]/50"
        >
          <div className="flex min-h-[500px]">
            {/* Left Section - Text and Information */}
            <div className="flex-1 bg-gradient-to-br from-[#333F72] to-[#2a3459] p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                  {exam.title}
                </h2>
                <p className="text-white/90 text-xl leading-relaxed max-w-2xl mb-8">
                  {exam.description}
                </p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-1/2 relative">
              <img 
                src={`https://picsum.photos/600/500?random=${exam.id}`}
                alt={exam.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20"></div>
              <div className="absolute top-6 right-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-bold text-lg">{exam.id.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Information Section - Full Width */}
          <div className="bg-[#faf5ef] p-8 border-t border-[#333F72]/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="uppercase tracking-wider text-[#333F72]/60 text-sm font-medium mb-2">Related Job Role Path</span>
                  <span className="text-[#333F72] font-semibold text-lg">JLPT Certification</span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase tracking-wider text-[#333F72]/60 text-sm font-medium mb-2">Covers</span>
                  <span className="text-[#333F72] font-semibold text-lg">{exam.covers}</span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase tracking-wider text-[#333F72]/60 text-sm font-medium mb-2">Exam Vouchers Required</span>
                  <span className="text-[#333F72] font-semibold text-lg">{exam.vouchers}</span>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setSelectedExam(exam);
                  setCurrentView('testSession');
                }}
                className="text-[#E56E0C] hover:text-[#d46310] transition-colors font-semibold text-lg"
              >
                EXAM INFORMATION ▶
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderStatisticsView = () => (
    <div className="space-y-6">
      {/* Top Row - Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Goal Progress Gauge */}
        <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
          <h3 className="text-lg font-bold text-[#333F72] mb-4">Goal This Month</h3>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-[#333F72]/20"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#E56E0C]"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="87, 100"
                  strokeLinecap="round"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#333F72]">87%</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#333F72]">26,213</p>
            <p className="text-sm text-[#333F72]/60">of 30,000 points</p>
          </div>
        </div>
            
        {/* Study Time Chart */}
        <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
          <h3 className="text-lg font-bold text-[#333F72] mb-4">Study Time Trend</h3>
          <div className="h-32 flex items-end justify-between space-x-2">
            {[20, 35, 25, 45, 30, 40, 55].map((height, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="bg-[#E56E0C] rounded-t w-6"
                  style={{ height: `${height}px` }}
                ></div>
                <span className="text-xs text-[#333F72]/60 mt-1">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-2xl font-bold text-[#333F72]">24h</p>
            <p className="text-sm text-[#333F72]/60">This week</p>
          </div>
        </div>

        {/* Section Performance Pie */}
        <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
          <h3 className="text-lg font-bold text-[#333F72] mb-4">Section Distribution</h3>
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#E56E0C] via-[#333F72] to-[#2a3459] flex items-center justify-center">
              <span className="text-white font-bold text-lg">JLPT</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#333F72]">Vocabulary</span>
              <span className="font-semibold">35%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#333F72]">Grammar</span>
              <span className="font-semibold">25%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#333F72]">Reading</span>
              <span className="font-semibold">25%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#333F72]">Listening</span>
              <span className="font-semibold">15%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Ranking */}
        <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
          <h3 className="text-lg font-bold text-[#333F72] mb-4">Top Performing Areas</h3>
          <div className="space-y-4">
            {[
              { name: 'Reading Comprehension', score: 85, trend: 'up' },
              { name: 'Vocabulary', score: 78, trend: 'up' },
              { name: 'Grammar', score: 72, trend: 'down' },
              { name: 'Listening', score: 68, trend: 'up' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-semibold text-[#333F72]">#{index + 1}</span>
                  <span className="text-sm text-[#333F72]">{item.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-[#333F72]">{item.score}%</span>
                  <span className={`text-xs ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {item.trend === 'up' ? '↗' : '↘'}
                  </span>
                </div>
              </div>
            ))}
          </div>
                    </div>

        {/* Progress Bars */}
        <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
          <h3 className="text-lg font-bold text-[#333F72] mb-4">Learning Progress</h3>
          <div className="space-y-4">
            {[
              { name: 'N5 Level', progress: 100, color: 'bg-green-500' },
              { name: 'N4 Level', progress: 75, color: 'bg-[#E56E0C]' },
              { name: 'N3 Level', progress: 45, color: 'bg-[#333F72]' },
              { name: 'N2 Level', progress: 15, color: 'bg-gray-400' }
            ].map((level, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#333F72]">{level.name}</span>
                  <span className="text-sm text-[#333F72]/70">{level.progress}%</span>
                    </div>
                <div className="w-full bg-[#333F72]/10 rounded-full h-2">
                  <div 
                    className={`${level.color} h-2 rounded-full transition-all duration-500`} 
                    style={{ width: `${level.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue/Score Summary */}
        <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#333F72]">
          <h3 className="text-lg font-bold text-[#333F72] mb-4">Overall Score</h3>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#333F72] mb-2">1,944</div>
            <div className="text-sm text-[#333F72]/60 mb-4">Total Points Earned</div>
            <div className="bg-green-100 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600 font-bold text-lg">↗</span>
                <span className="text-green-600 font-bold text-lg">+12%</span>
                <span className="text-sm text-green-600">vs last month</span>
              </div>
            </div>
            <div className="text-sm text-[#333F72]/60">
              Target: 2,000 points
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  const renderTestSessionView = () => (
    <div className="space-y-8">
      {/* Header with Timer */}
      <div className="bg-white rounded-xl border-2 border-[#333F72]/20 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#333F72]">{selectedExam?.title}</h2>
            <p className="text-sm text-[#333F72]/70">Question 1 of {selectedExam?.questions}</p>
          </div>
          <div className="flex items-center gap-2 text-red-500">
            <span className="text-lg">⏰</span>
            <span className="text-2xl font-bold">14:32</span>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl border-2 border-[#333F72]/20 p-8">
        <span className="inline-block px-3 py-1 bg-[#E56E0C] text-white rounded-full text-sm font-semibold mb-6">
          Vocabulary
        </span>
        <h3 className="text-2xl font-bold text-[#333F72] mb-8">彼は毎日図書館で___。</h3>

        <div className="space-y-3">
          {['勉強します', '勉強しません', '勉強した', '勉強する'].map((option, index) => (
            <button
              key={index}
              className="w-full p-5 text-left rounded-lg border-2 border-[#333F72]/20 hover:border-[#E56E0C] hover:bg-[#E56E0C]/5 transition-all"
            >
              <span className="font-semibold mr-3 text-[#333F72]/60">{String.fromCharCode(65 + index)}.</span>
              <span className="text-lg text-[#333F72]">{option}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button className="px-6 py-3 bg-[#333F72] text-white rounded-lg hover:bg-[#2a3459] transition-colors font-semibold">
          Previous
        </button>
        
        <div className="flex gap-2 overflow-x-auto max-w-2xl">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                i === 0 ? 'bg-[#E56E0C] text-white' : 'bg-[#333F72]/20 text-[#333F72]/60'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <button className="px-6 py-3 bg-[#E56E0C] text-white rounded-lg hover:bg-[#d46310] transition-colors font-semibold">
          Next
        </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf5ef] via-[#f8f3ed] to-[#f5f0e8]">
      <DashboardHeader />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-[#faf5ef] border-r border-[#333F72]/20 min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#333F72] mb-8">JLPT Practice</h1>
            
            {sidebarItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                {/* Section Header */}
                <h2 className="text-lg font-semibold text-[#E56E0C] mb-4">
                  {section.section}
                </h2>
                
                {/* Section Items */}
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id as ViewType)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        currentView === item.id
                          ? 'bg-[#E56E0C] text-white shadow-sm'
                          : 'text-[#333F72] hover:bg-[#333F72]/10'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium text-base">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-[#faf5ef] via-[#f8f3ed] to-[#f5f0e8] p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#333F72] mb-2">
              {currentView === 'exams' && 'JLPT Practice Exams'}
              {currentView === 'statistics' && 'Statistics'}
              {currentView === 'testSession' && 'Test Session'}
            </h1>
            <p className="text-[#333F72]/70">
              {currentView === 'exams' && 'Choose an exam type to begin your practice session'}
              {currentView === 'statistics' && 'Track your performance and progress'}
              {currentView === 'testSession' && 'Complete your practice exam'}
            </p>
          </div>

          {/* Content Area */}
          {currentView === 'exams' && renderExamsView()}
          {currentView === 'statistics' && renderStatisticsView()}
          {currentView === 'testSession' && renderTestSessionView()}
        </div>
      </div>
    </div>
  );
}