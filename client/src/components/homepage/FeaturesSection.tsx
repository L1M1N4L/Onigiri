import wave_pattern from "../../assets/wave_pattern.svg";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: "Smart Learning Paths",
      description: "AI-powered curriculum that adapts to your pace and goals",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: "📱",
      title: "Interactive Lessons",
      description: "Engaging exercises with instant feedback and progress tracking",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: "👥",
      title: "Community Learning",
      description: "Connect with fellow learners and practice together",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description: "Detailed insights into your learning journey and achievements",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "🎮",
      title: "Gamified Experience",
      description: "Earn points, unlock levels, and make learning addictive",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: "📚",
      title: "JLPT Preparation",
      description: "Comprehensive prep for all JLPT levels with real exam questions",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section 
      className="py-20 bg-white relative"
      style={{backgroundImage: `url(${wave_pattern})`}}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333F72] mb-6">
            Why Choose <span className="text-[#E56E0C]">Onigiri</span>?
          </h2>
          <p className="text-xl text-[#333F72]/70 max-w-3xl mx-auto">
            Experience Japanese learning like never before with our innovative platform designed for modern learners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E56E0C]/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#333F72] mb-3 group-hover:text-[#E56E0C] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#333F72]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
