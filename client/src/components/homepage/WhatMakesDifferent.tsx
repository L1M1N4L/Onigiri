export default function WhatMakesDifferent() {
  const features = [
    {
      icon: "🧭",
      title: "Personalized Learning Paths",
      description: "AI-powered curriculum that adapts to your pace, learning style, and goals for maximum efficiency.",
      stats: "40% faster progress"
    },
    {
      icon: "📝",
      title: "Real JLPT-Style Questions",
      description: "Practice with authentic exam questions from past JLPT tests, updated regularly for accuracy.",
      stats: "95% pass rate"
    },
    {
      icon: "🤝",
      title: "Community-Driven Content",
      description: "Learn from fellow learners' experiences and contribute your own insights to help others.",
      stats: "10K+ active users"
    },
    {
      icon: "📊",
      title: "Advanced Progress Analytics",
      description: "Detailed insights into your strengths, weaknesses, and learning patterns with actionable recommendations.",
      stats: "Real-time feedback"
    }
  ];

  return (
    <section className="w-full py-20 bg-[#faf5ef] flex justify-center">
      <div className="max-w-6xl w-full px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333F72] mb-6">
            What Makes <span className="text-[#E56E0C]">Onigiri</span> Different
          </h2>
          <p className="text-xl text-[#333F72]/70 max-w-3xl mx-auto">
            We've revolutionized Japanese learning with cutting-edge technology and proven methodologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-[#E56E0C]/20 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#333F72] group-hover:text-[#E56E0C] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <span className="text-sm font-semibold text-[#E56E0C] bg-[#E56E0C]/10 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-[#333F72]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#333F72]">10K+</div>
              <div className="text-sm text-[#333F72]/70">Active Learners</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#333F72]">95%</div>
              <div className="text-sm text-[#333F72]/70">JLPT Pass Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#333F72]">4.9★</div>
              <div className="text-sm text-[#333F72]/70">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 