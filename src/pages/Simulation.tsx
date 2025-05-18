import React, { useState, useEffect } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import { PlayCircle, Clock, Award, ChevronRight, Lock, Star, TrendingUp, AlertCircle, Info, X, Calendar, AlertTriangle } from 'lucide-react';
import type { TestProgress } from '../services/testService';

const Simulation: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [showTestInfo, setShowTestInfo] = useState(false);
  const [timeUntilNextTest, setTimeUntilNextTest] = useState<string>('');

  // Calculate time until next weekly test
  useEffect(() => {
    const calculateTimeUntilNextTest = () => {
      const now = new Date();
      const nextTest = new Date();
      nextTest.setDate(now.getDate() + (7 - now.getDay())); // Next Sunday
      nextTest.setHours(0, 0, 0, 0);

      const diff = nextTest.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      if (days > 0) {
        setTimeUntilNextTest(`${days} day${days > 1 ? 's' : ''} and ${hours} hour${hours > 1 ? 's' : ''}`);
      } else {
        setTimeUntilNextTest(`${hours} hour${hours > 1 ? 's' : ''}`);
      }
    };

    calculateTimeUntilNextTest();
    const interval = setInterval(calculateTimeUntilNextTest, 1000 * 60); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Static mock data with weekly test info
  const userProgress: TestProgress & { 
    lastWeeklyTest?: string;
    weeklyTestCompleted: boolean;
    nextWeeklyTest: string;
  } = {
    currentLevel: 'N5',
    nextLevel: 'N4',
    simulationScore: 85,
    requiredScore: 80,
    lastWeeklyTest: '2024-03-17', // Last Sunday
    weeklyTestCompleted: true,
    nextWeeklyTest: '2024-03-24', // Next Sunday
    testHistory: [
      {
        id: 'full-n5-1',
        userId: 'user123',
        testId: 'full-n5',
        type: 'full',
        level: 'N5',
        date: '2024-03-15',
        score: 85,
        duration: '1h 55m',
        sections: {
          grammar: 82,
          vocabulary: 88,
          reading: 85
        },
        answers: []
      },
      {
        id: 'grammar-n5-1',
        userId: 'user123',
        testId: 'grammar-n5',
        type: 'section',
        section: 'grammar',
        level: 'N5',
        date: '2024-03-14',
        score: 82,
        duration: '25m',
        answers: []
      }
    ],
    availableTests: [
      {
        id: 'full-n5',
        type: 'full',
        level: 'N5',
        title: 'Full JLPT N5 Practice Test',
        description: 'Complete N5 practice test with all sections',
        duration: '2 hours',
        sections: ['Grammar', 'Vocabulary', 'Reading'],
        unlocked: true,
        lastAttempt: '2024-03-15',
        bestScore: 85,
        passingProbability: 0.68
      },
      {
        id: 'grammar-n5',
        type: 'section',
        level: 'N5',
        title: 'N5 Grammar Practice',
        description: 'Practice grammar questions for N5 level',
        duration: '30 minutes',
        sections: ['Grammar'],
        unlocked: true,
        lastAttempt: '2024-03-14',
        bestScore: 82,
        passingProbability: 0.75
      },
      {
        id: 'vocab-n5',
        type: 'section',
        level: 'N5',
        title: 'N5 Vocabulary Practice',
        description: 'Practice vocabulary questions for N5 level',
        duration: '30 minutes',
        sections: ['Vocabulary'],
        unlocked: true,
        lastAttempt: '2024-03-13',
        bestScore: 88,
        passingProbability: 0.80
      },
      {
        id: 'reading-n5',
        type: 'section',
        level: 'N5',
        title: 'N5 Reading Practice',
        description: 'Practice reading comprehension for N5 level',
        duration: '30 minutes',
        sections: ['Reading'],
        unlocked: false,
        lastAttempt: null,
        bestScore: null,
        passingProbability: 0.55
      }
    ]
  };

  const handleStartTest = (testId: string) => {
    setSelectedTest(testId);
    setShowTestInfo(true);
  };

  const isWeeklyTestAvailable = () => {
    const now = new Date();
    const lastTest = new Date(userProgress.lastWeeklyTest || '');
    const daysSinceLastTest = Math.floor((now.getTime() - lastTest.getTime()) / (1000 * 60 * 60 * 24));
    return daysSinceLastTest >= 7;
  };

  return (
    <div className="min-h-screen flex bg-[#F8F9FA]">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#14274E] mb-2">JLPT Practice Tests</h1>
              <p className="text-[#14274E]/70">Practice with JLPT-style questions and full-length tests</p>
            </div>

            {/* Weekly Test Status */}
            <div className="mb-8">
              <div className={`rounded-xl p-6 ${
                userProgress.weeklyTestCompleted 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-[#E23946]/10 border border-[#E23946]/20'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    userProgress.weeklyTestCompleted 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-[#E23946]/20 text-[#E23946]'
                  }`}>
                    <Calendar size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-semibold text-[#14274E]">
                        Weekly Test Status
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        userProgress.weeklyTestCompleted
                          ? 'bg-green-100 text-green-700'
                          : 'bg-[#E23946]/20 text-[#E23946]'
                      }`}>
                        {userProgress.weeklyTestCompleted ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-[#14274E]/70 mb-4">
                      {userProgress.weeklyTestCompleted 
                        ? `You've completed this week's test on ${userProgress.lastWeeklyTest}. New content will be available next week.`
                        : `Complete this week's test to unlock new content. Time remaining: ${timeUntilNextTest}`
                      }
                    </p>
                    {!userProgress.weeklyTestCompleted && (
                      <div className="flex items-center gap-2 text-[#E23946] text-sm">
                        <AlertTriangle size={16} />
                        <span>Weekly test required to maintain access to practice materials</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Start Section */}
            <div className="mb-8">
              <div className="bg-[#14274E] rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Ready to Test Your Skills?</h2>
                    <p className="text-white/80">
                      {userProgress.weeklyTestCompleted 
                        ? "Practice with this week's content or review previous materials"
                        : "Complete this week's test to unlock new practice materials"
                      }
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleStartTest('full-n5')}
                      className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                        userProgress.weeklyTestCompleted
                          ? 'bg-white text-[#14274E] hover:bg-white/90'
                          : 'bg-white/20 text-white cursor-not-allowed'
                      }`}
                      disabled={!userProgress.weeklyTestCompleted}
                    >
                      <PlayCircle size={20} />
                      {userProgress.weeklyTestCompleted ? 'Start Full Test' : 'Weekly Test Required'}
                    </button>
                    <button
                      onClick={() => handleStartTest('grammar-n5')}
                      className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                        userProgress.weeklyTestCompleted
                          ? 'bg-[#14274E] border border-white text-white hover:bg-[#1a3a6e]'
                          : 'bg-white/20 text-white cursor-not-allowed'
                      }`}
                      disabled={!userProgress.weeklyTestCompleted}
                    >
                      <PlayCircle size={20} />
                      {userProgress.weeklyTestCompleted ? 'Quick Practice' : 'Weekly Test Required'}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} />
                      <span className="font-medium">Duration</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Full test: 2 hours<br />
                      Quick practice: 30 min<br />
                      Weekly test: 1 hour
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} />
                      <span className="font-medium">Next Test</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Weekly reset: {userProgress.nextWeeklyTest}<br />
                      Time remaining: {timeUntilNextTest}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={16} />
                      <span className="font-medium">Progress</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Ready for N4<br />
                      {userProgress.simulationScore}% overall<br />
                      Weekly test: {userProgress.weeklyTestCompleted ? 'Completed' : 'Pending'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Tests Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Full Test Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#14274E] mb-4">Full Practice Tests</h2>
                <div className="space-y-4">
                  {userProgress.availableTests
                    .filter(test => test.type === 'full')
                    .map((test) => (
                      <div key={test.id} className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-[#14274E]">
                            <PlayCircle className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#14274E]">{test.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-[#14274E]/60">
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{test.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Award size={14} />
                                <span>{test.sections.join(' • ')}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleStartTest(test.id)}
                          className="bg-[#14274E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1a3a6e] transition flex items-center gap-2"
                        >
                          Start Test
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              {/* Section Practice */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#14274E] mb-4">Section Practice</h2>
                <div className="space-y-4">
                  {userProgress.availableTests
                    .filter(test => test.type === 'section')
                    .map((test) => (
                      <div key={test.id} className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-[#14274E]/10">
                            <PlayCircle className="text-[#14274E]" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#14274E]">{test.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-[#14274E]/60">
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{test.duration}</span>
                              </div>
                              {test.unlocked && test.lastAttempt && (
                                <div className="flex items-center gap-1">
                                  <Award size={14} />
                                  <span>Best: {test.bestScore}%</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {test.unlocked ? (
                          <button
                            onClick={() => handleStartTest(test.id)}
                            className="bg-[#14274E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1a3a6e] transition flex items-center gap-2"
                          >
                            Start Practice
                            <ChevronRight size={18} />
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 text-[#14274E]/40">
                            <Lock size={18} />
                            <span>Complete previous sections</span>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Progress and History */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#14274E] mb-4">Your Progress</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#14274E]/70">Current Level</span>
                    <span className="font-semibold text-[#14274E]">{userProgress.currentLevel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#14274E]/70">Next Level</span>
                    <span className="font-semibold text-[#14274E]">{userProgress.nextLevel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#14274E]/70">Simulation Score</span>
                    <span className="font-semibold text-[#14274E]">{userProgress.simulationScore}%</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#14274E]/70">Progress to {userProgress.nextLevel}</span>
                      <span className="font-semibold text-[#14274E]">
                        {userProgress.simulationScore >= userProgress.requiredScore ? 'Ready!' : 'In Progress'}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-2 transition-all duration-500 ${
                          userProgress.simulationScore >= userProgress.requiredScore ? 'bg-green-500' : 'bg-[#E23946]'
                        }`}
                        style={{ width: `${Math.min((userProgress.simulationScore / userProgress.requiredScore) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#14274E] mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {userProgress.testHistory.slice(0, 3).map((test) => (
                    <div key={test.id} className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
                      <div>
                        <div className="font-medium text-[#14274E]">
                          {test.type === 'full' ? `Full ${test.level} Test` : `${test.level} ${test.section} Practice`}
                        </div>
                        <div className="text-sm text-[#14274E]/60">
                          {test.date} • {test.duration}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-[#14274E]">{test.score}%</div>
                        {test.type === 'full' && test.sections && (
                          <div className="text-xs text-[#14274E]/60">
                            G: {test.sections.grammar}% • V: {test.sections.vocabulary}% • R: {test.sections.reading}%
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Test Info Modal */}
            {showTestInfo && selectedTest && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl p-6 max-w-lg w-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#14274E]">Test Information</h3>
                    <button
                      onClick={() => setShowTestInfo(false)}
                      className="text-[#14274E]/60 hover:text-[#14274E]"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-700">
                          <p className="font-medium mb-1">Before you begin:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Find a quiet environment</li>
                            <li>Ensure you have enough uninterrupted time</li>
                            <li>Have paper ready for notes</li>
                            <li>Test will auto-submit when time is up</li>
                            {!userProgress.weeklyTestCompleted && (
                              <li className="text-[#E23946] font-medium">
                                Weekly test must be completed to maintain access
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setShowTestInfo(false)}
                        className="flex-1 bg-gray-100 text-[#14274E] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setShowTestInfo(false);
                          // TODO: Navigate to test page
                          console.log('Starting test:', selectedTest);
                        }}
                        className={`flex-1 px-4 py-2 rounded-lg font-semibold transition ${
                          userProgress.weeklyTestCompleted
                            ? 'bg-[#14274E] text-white hover:bg-[#1a3a6e]'
                            : 'bg-[#E23946] text-white hover:bg-[#E23946]/90'
                        }`}
                      >
                        {userProgress.weeklyTestCompleted ? 'Start Now' : 'Start Weekly Test'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Simulation; 