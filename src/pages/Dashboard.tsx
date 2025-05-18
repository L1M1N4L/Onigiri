import React, { useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import { BookOpen, FileText, Book, PlayCircle, Calendar, Lock, ChevronRight, TrendingUp, Star, Award, PenTool, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [showPlanner, setShowPlanner] = useState(false);

  // Study schedule data
  const studySchedule = {
    weeklyGoal: 10,
    completed: 7,
    days: [true, true, false, true, true, false, false],
  };

  // Current enrolled course data
  const currentCourse = {
    id: 'n5',
    title: 'JLPT N5 Complete Course',
    description: 'Master the basics of Japanese language for JLPT N5.',
    level: 'Beginner',
    simulationScore: 85,
    modules: [
      {
        id: 'writing',
        title: 'Writing',
        description: 'Practice writing skills with prompts and exercises.',
        lessons: 30,
        completed: 10,
        icon: <Edit size={32} />,
        unlocked: true,
        link: '/courses/n5',
      },
      {
        id: 'grammar',
        title: 'Grammar',
        description: 'Learn and practice N5 level grammar points.',
        lessons: 35,
        completed: 20,
        icon: <BookOpen size={32} />,
        unlocked: true,
        link: '/courses/n5',
      },
      {
        id: 'reading',
        title: 'Reading',
        description: 'Improve reading comprehension with various texts.',
        lessons: 25,
        completed: 5,
        icon: <FileText size={32} />,
        unlocked: false,
        link: '/courses/n5',
      },
    ],
    simulation: {
      full: {
        title: 'Full JLPT N5 Simulation',
        duration: '2 hours',
        unlocked: true,
        passingProbability: 0.68,
        lastAttempt: '2024-03-15',
        bestScore: 85,
      },
      sections: [
        { 
          id: 'grammar', 
          title: 'Grammar Practice', 
          unlocked: true, 
          passingProbability: 0.75,
          lastAttempt: '2024-03-14',
          bestScore: 82,
        },
        { 
          id: 'writing',
          title: 'Writing Practice',
          unlocked: true, 
          passingProbability: 0.80,
          lastAttempt: '2024-03-13',
          bestScore: 88,
        },
        { 
          id: 'reading', 
          title: 'Reading Practice', 
          unlocked: false, 
          passingProbability: 0.55,
          lastAttempt: null,
          bestScore: null,
        },
      ],
    },
  };

  const canAccessNextLevel = currentCourse.simulationScore >= 80;
  const overallProgress = Math.round(
    (currentCourse.modules.reduce((acc, mod) => acc + mod.completed, 0) /
    currentCourse.modules.reduce((acc, mod) => acc + mod.lessons, 0)) * 100
  );

  return (
    <div className="min-h-screen flex bg-[#F8F9FA]">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="flex-1 p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <section className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#14274E] mb-2">{currentCourse.title}</h2>
                    <p className="text-[#14274E]/70">{currentCourse.description}</p>
                  </div>
                  {canAccessNextLevel && (
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg flex items-center gap-2">
                      <Award size={20} />
                      <span className="font-semibold">Ready for N4!</span>
                    </div>
                  )}
                </div>

                {/* Overall Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#14274E]">Overall Progress</span>
                    <span className="text-sm font-bold text-[#14274E]">{overallProgress}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-3 bg-gradient-to-r from-[#E23946] to-[#14274E] transition-all duration-500" 
                      style={{ width: `${overallProgress}%` }} 
                    />
                  </div>
                </div>

                {/* Modules Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {currentCourse.modules.map((module) => (
                    <div key={module.id} className="bg-[#F8F9FA] rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        {module.icon}
                        <div>
                          <h3 className="font-semibold text-[#14274E]">{module.title}</h3>
                          <p className="text-xs text-[#14274E]/60">{module.completed}/{module.lessons} lessons</p>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-2 bg-[#14274E] transition-all duration-500" 
                          style={{ width: `${(module.completed / module.lessons) * 100}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Single Continue Button for the entire course */}
                <div className="mt-6">
                  <Link
                    to="/courses/n5"
                    className="w-full rounded-lg px-4 py-3 text-base font-semibold transition bg-[#14274E] text-white hover:bg-[#1a3a6e] flex items-center justify-center gap-2"
                  >
                    Continue N5 Course
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>

              {/* Simulation Center */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-bold text-[#14274E] mb-4">Simulation Center</h3>
                
                {/* Full Simulation */}
                <div className="mb-6 p-4 bg-[#F8F9FA] rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <PlayCircle className="text-[#14274E]" size={24} />
                      <div>
                        <h4 className="font-semibold text-[#14274E]">{currentCourse.simulation.full.title}</h4>
                        <p className="text-sm text-[#14274E]/60">Duration: {currentCourse.simulation.full.duration}</p>
                      </div>
                    </div>
                    <button className="bg-[#14274E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1a3a6e] transition">
                      Start Test
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="text-yellow-400" size={16} />
                      <span>Best Score: <span className="font-bold">{currentCourse.simulation.full.bestScore}%</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-[#E23946]" size={16} />
                      <span>Passing Probability: <span className="font-bold text-[#E23946]">{Math.round(currentCourse.simulation.full.passingProbability * 100)}%</span></span>
                    </div>
                    <div className="text-[#14274E]/60">
                      Last Attempt: {currentCourse.simulation.full.lastAttempt}
                    </div>
                  </div>
                </div>

                {/* Section Practice */}
                <div>
                  <h4 className="text-sm font-semibold text-[#14274E] mb-3">Section Practice</h4>
                  <div className="space-y-3">
                    {currentCourse.simulation.sections.map(section => (
                      <div key={section.id} className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
                        <div className="flex items-center gap-3">
                          <ChevronRight className="text-[#14274E]" size={18} />
                          <div>
                            <div className="font-semibold text-[#14274E]">{section.title}</div>
                            {section.lastAttempt && (
                              <div className="text-xs text-[#14274E]/60">
                                Best Score: {section.bestScore}% • Last: {section.lastAttempt}
                              </div>
                            )}
                          </div>
                        </div>
                        <button 
                          className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                            section.unlocked 
                              ? 'bg-[#14274E] text-white hover:bg-[#1a3a6e]' 
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                          disabled={!section.unlocked}
                        >
                          Practice
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Study Schedule Planner */}
              <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-[#14274E]">Study Schedule Planner</h2>
                  <button onClick={() => setShowPlanner(true)} className="bg-[#E23946] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#c72d3b] transition">Create Study Schedule</button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {studySchedule.days.map((done, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full ${done ? 'bg-[#14274E]' : 'bg-gray-200'} border-2 border-[#14274E] flex items-center justify-center text-xs text-white font-bold`}>{done ? '✓' : ''}</div>
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-2 bg-[#E23946] transition-all duration-500" style={{ width: `${(studySchedule.completed / studySchedule.weeklyGoal) * 100}%` }} />
                    </div>
                    <span className="text-xs text-[#14274E]/60">{studySchedule.completed}/{studySchedule.weeklyGoal} Sessions This Week</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Sidebar */}
            <section className="space-y-8">
              {/* Course Status */}
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-lg font-bold text-[#14274E] mb-4">Course Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#14274E]/70">Current Level</span>
                    <span className="font-semibold text-[#14274E]">N5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#14274E]/70">Next Level</span>
                    <span className="font-semibold text-[#14274E]">N4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#14274E]/70">Simulation Score</span>
                    <span className="font-semibold text-[#14274E]">{currentCourse.simulationScore}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#14274E]/70">Required for N4</span>
                    <span className="font-semibold text-[#14274E]">80%</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#14274E]/70">Progress to N4</span>
                      <span className="font-semibold text-[#14274E]">
                        {canAccessNextLevel ? 'Ready!' : 'In Progress'}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-2 transition-all duration-500 ${
                          canAccessNextLevel ? 'bg-green-500' : 'bg-[#E23946]'
                        }`}
                        style={{ width: `${Math.min((currentCourse.simulationScore / 80) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Word of the Day */}
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-lg font-bold text-[#14274E] mb-2">Word Of The Day</h3>
                <div className="text-4xl font-bold text-[#14274E] mb-2">素朴</div>
                <div className="text-md text-[#14274E]/70 mb-1">そぼく</div>
                <div className="text-md text-[#14274E]/80 mb-2">Simple, naive, unsophisticated</div>
                <div className="text-xs text-[#14274E]/50">May 17, 2025</div>
              </div>
            </section>
          </div>
          {/* Study Schedule Modal */}
          {showPlanner && (
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <h2 className="text-xl font-bold text-[#14274E] mb-4">Create Study Schedule</h2>
                <p className="text-[#14274E]/70 mb-4">(Feature coming soon!) Here you will be able to set your weekly study goals and get personalized reminders.</p>
                <button onClick={() => setShowPlanner(false)} className="bg-[#E23946] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#c72d3b] transition">Close</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 