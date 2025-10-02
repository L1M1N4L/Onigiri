export default function WhatMakesDifferent() {
  return (
    <section className="w-full py-20 bg-[#faf5ef] flex justify-center">
      <div className="max-w-5xl w-full px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333F72] mb-10 text-center">What Makes Onigiri-Project Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <span className="text-4xl">🧭</span>
            <div>
              <h3 className="text-lg font-semibold mb-1">Personalized Learning Paths</h3>
              <p className="text-[#333F72] opacity-80">Tailor your study journey to your goals and level.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <span className="text-4xl">📝</span>
            <div>
              <h3 className="text-lg font-semibold mb-1">Real JLPT-Style Questions</h3>
              <p className="text-[#333F72] opacity-80">Practice with authentic, exam-like questions and tasks.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <span className="text-4xl">🤝</span>
            <div>
              <h3 className="text-lg font-semibold mb-1">Community-Driven Content</h3>
              <p className="text-[#333F72] opacity-80">Learn and grow with content contributed by fellow learners.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <span className="text-4xl">📊</span>
            <div>
              <h3 className="text-lg font-semibold mb-1">Progress Tracking & Analytics</h3>
              <p className="text-[#333F72] opacity-80">See your improvement with detailed stats and feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 