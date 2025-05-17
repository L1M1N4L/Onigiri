import React, { useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import { BookOpen, FileText, Book, PlayCircle, Calendar, Lock, ChevronRight, TrendingUp } from 'lucide-react';

const modules = [
  {
    id: 'vocab',
    title: 'Vocabulary N5',
    description: 'Build your JLPT N5 vocabulary foundation.',
    lessons: 40,
    completed: 16,
    icon: <BookOpen className="text-[#14274E]" size={28} />,
    unlocked: true,
  },
  {
    id: 'grammar',
    title: 'Grammar N5',
    description: 'Master essential grammar for JLPT N5.',
    lessons: 35,
    completed: 20,
    icon: <FileText className="text-[#14274E]" size={28} />,
    unlocked: true,
  },
  {
    id: 'reading',
    title: 'Reading N5',
    description: 'Practice reading comprehension for JLPT N5.',
    lessons: 25,
    completed: 5,
    icon: <Book className="text-[#14274E]" size={28} />,
    unlocked: false,
  },
];

const simulation = {
  full: {
    title: 'Full JLPT N5 Simulation',
    duration: '2 hours',
    unlocked: modules.every(m => m.completed / m.lessons > 0.5),
    passingProbability: 0.68,
  },
  sections: [
    { id: 'grammar', title: 'Grammar Practice', unlocked: modules[1].completed > 0, passingProbability: 0.75 },
    { id: 'vocab', title: 'Vocabulary Practice', unlocked: modules[0].completed > 0, passingProbability: 0.80 },
    { id: 'reading', title: 'Reading Practice', unlocked: modules[2].completed > 0, passingProbability: 0.55 },
  ],
};

const studySchedule = {
  weeklyGoal: 10,
  completed: 7,
  days: [true, true, false, true, true, false, false],
};

const Dashboard: React.FC = () => {
  const [showPlanner, setShowPlanner] = useState(false);
  return (
    <div className="min-h-screen flex bg-[#F8F9FA]">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="flex-1 p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* JLPT Modules */}
            <section className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#14274E] mb-4">JLPT Modules</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {modules.map((mod) => (
                    <div key={mod.id} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 relative">
                      <div className="flex items-center gap-3">
                        {mod.icon}
                        <div>
                          <h3 className="font-bold text-lg text-[#14274E]">{mod.title}</h3>
                          <p className="text-sm text-gray-500">{mod.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-2 bg-gradient-to-r from-[#E23946] to-[#14274E] transition-all duration-500" style={{ width: `${(mod.completed / mod.lessons) * 100}%` }} />
                        </div>
                        <span className="text-xs text-[#14274E]/60">{mod.completed}/{mod.lessons} Lessons</span>
                      </div>
                      <button
                        className={`rounded-lg px-4 py-2 font-semibold transition flex items-center gap-2 ${mod.unlocked ? 'bg-[#14274E] text-white hover:bg-[#1a3a6e]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                        disabled={!mod.unlocked}
                      >
                        {mod.unlocked ? 'Continue' : (<><Lock size={16} /> Locked</>)}
                      </button>
                      {!mod.unlocked && <div className="absolute top-4 right-4"><Lock className="text-gray-300" size={20} /></div>}
                    </div>
                  ))}
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
              {/* Simulation Center */}
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-lg font-bold text-[#14274E] mb-4">JLPT Test Simulation Center</h3>
                <div className="mb-4">
                  <div className={`flex items-center gap-3 mb-2 ${simulation.full.unlocked ? '' : 'opacity-50'}`}>
                    <PlayCircle className="text-[#14274E]" size={22} />
                    <div className="flex-1">
                      <div className="font-semibold text-[#14274E]">{simulation.full.title}</div>
                      <div className="text-xs text-gray-500">Duration: {simulation.full.duration}</div>
                    </div>
                    <button className={`rounded-lg px-3 py-1 font-semibold transition ${simulation.full.unlocked ? 'bg-[#14274E] text-white hover:bg-[#1a3a6e]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`} disabled={!simulation.full.unlocked}>Start Test</button>
                  </div>
                  <div className="flex items-center gap-2 ml-8">
                    <TrendingUp className="text-[#E23946]" size={16} />
                    <span className="text-xs text-[#14274E]/70">Passing Probability: <span className="font-bold text-[#E23946]">{Math.round(simulation.full.passingProbability * 100)}%</span></span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-sm font-semibold text-[#14274E] mb-2">Section-Specific Practice</div>
                  {simulation.sections.map(sec => (
                    <div key={sec.id} className={`flex items-center gap-3 mb-2 ${sec.unlocked ? '' : 'opacity-50'}`}>
                      <ChevronRight className="text-[#14274E]" size={18} />
                      <div className="flex-1">
                        <div className="font-semibold text-[#14274E]">{sec.title}</div>
                      </div>
                      <button className={`rounded-lg px-3 py-1 font-semibold transition ${sec.unlocked ? 'bg-[#14274E] text-white hover:bg-[#1a3a6e]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`} disabled={!sec.unlocked}>Practice</button>
                      <span className="text-xs text-[#E23946] ml-2">{Math.round(sec.passingProbability * 100)}%</span>
                    </div>
                  ))}
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
          {/* Study Schedule Modal (placeholder) */}
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