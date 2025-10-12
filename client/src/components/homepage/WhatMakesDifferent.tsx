import wave_pattern from "../../assets/wave_pattern.svg";

export default function WhatMakesDifferent() {
  return (
    <section 
      className="w-full py-20 bg-[#faf5ef] relative overflow-hidden"
      style={{backgroundImage: `url(${wave_pattern})`}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf5ef]/90 to-[#f8f0e6]/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Section - Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-5xl font-bold text-[#333F72] leading-tight">
              Build real-world Japanese skills, <span className="text-[#E56E0C]">faster</span>
            </h2>

            {/* Interactive Learning Section */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#E56E0C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#333F72] mb-3">
                    Interactive learning for every role & level
                  </h3>
                  <p className="text-[#333F72]/70 text-base leading-relaxed mb-4">
                    Bite-sized, interactive courses built for busy professionals. Advance your Japanese language skills in just 10 minutes a day.
                  </p>
                  <a href="#" className="text-[#E56E0C] font-semibold text-base hover:text-[#ea580c] transition-colors">
                    Learn more →
                  </a>
                  
                  {/* Feature List as Subsection */}
                  <div className="space-y-4 mt-8 pl-6 border-l-2 border-[#E56E0C]/20">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#333F72]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="text-[#333F72]/70 text-base">Measure your skills. Close the gaps.</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#333F72]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                      </div>
                      <span className="text-[#333F72]/70 text-base">Earn trusted certifications</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#333F72]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                        </svg>
                      </div>
                      <span className="text-[#333F72]/70 text-base">Practice with real projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Course/Feature Cards */}
          <div className="space-y-4">
            
            {/* Card 1 - Personalized Learning */}
            <div className="bg-[#faf5ef] rounded-2xl p-6 flex items-center gap-6 border-2 border-[#333F72]"
                 style={{backgroundImage: `url(${wave_pattern})`}}>
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=64&h=64&fit=crop&crop=center" 
                  alt="Personalized Learning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#333F72] text-lg mb-1">Personalized Learning Paths</h4>
                <p className="text-[#333F72]/60 text-sm">AI-powered curriculum tailored to your goals</p>
              </div>
            </div>

            {/* Card 2 - JLPT Questions */}
            <div className="bg-[#faf5ef] rounded-2xl p-6 flex items-center gap-6 border-2 border-[#333F72]"
                 style={{backgroundImage: `url(${wave_pattern})`}}>
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=64&h=64&fit=crop&crop=center" 
                  alt="JLPT Questions" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#333F72] text-lg mb-1">Real JLPT-Style Questions</h4>
                <p className="text-[#333F72]/60 text-sm">Practice with authentic exam questions</p>
              </div>
            </div>

            {/* Card 3 - Community Content */}
            <div className="bg-[#faf5ef] rounded-2xl p-6 flex items-center gap-6 border-2 border-[#333F72]"
                 style={{backgroundImage: `url(${wave_pattern})`}}>
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=64&h=64&fit=crop&crop=center" 
                  alt="Community Content" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#333F72] text-lg mb-1">Community-Driven Content</h4>
                <p className="text-[#333F72]/60 text-sm">Learn from native speakers and peers</p>
              </div>
            </div>

            {/* Card 4 - Analytics */}
            <div className="bg-[#faf5ef] rounded-2xl p-6 flex items-center gap-6 border-2 border-[#333F72]"
                 style={{backgroundImage: `url(${wave_pattern})`}}>
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop&crop=center" 
                  alt="Analytics" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#333F72] text-lg mb-1">Progress Tracking & Analytics</h4>
                <p className="text-[#333F72]/60 text-sm">Detailed insights into your learning journey</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );

}