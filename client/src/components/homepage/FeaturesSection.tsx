import { FaBook, FaChartLine, FaClock, FaGraduationCap, FaTrophy, FaBrain, FaCheckCircle } from 'react-icons/fa';
import wave_pattern from "../../assets/wave_pattern.svg";

export default function OnigiriFeatures() {
  return (
    <section 
      className="w-full py-16 bg-[#faf5ef] relative overflow-hidden"
      style={{backgroundImage: `url(${wave_pattern})`}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf5ef]/90 to-[#f8f0e6]/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-[#E56E0C] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Features
          </div>
          <h2 className="text-5xl font-bold text-[#333F72] mb-4">
            Why Choose Onigiri for <span className="text-[#E56E0C]">JLPT Success</span>
          </h2>
          <p className="text-[#333F72]/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Our comprehensive JLPT preparation platform combines structured curriculum, adaptive learning, 
            and realistic test simulations to maximize your exam success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Comprehensive Curriculum Card */}
          <div className="bg-[#faf5ef] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-[#333F72]/10"
               style={{backgroundImage: `url(${wave_pattern})`}}>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-[#333F72] to-[#1e293b] w-12 h-12 rounded-lg flex items-center justify-center">
                    <FaBook className="text-white text-xl" />
                  </div>
                  <div className="text-gray-800 font-bold text-lg">N5 to N1</div>
                </div>
                
                <div className="space-y-2">
                  {['Grammar', 'Vocabulary', 'Reading', 'Listening'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#E56E0C] text-sm flex-shrink-0" />
                      <div className="text-gray-700 text-sm font-medium">{skill}</div>
                      <div className="h-2 bg-gradient-to-r from-[#E56E0C] to-transparent rounded-full flex-1 ml-auto"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#333F72] mb-3">
                Complete JLPT Curriculum
              </h3>
              <p className="text-[#333F72]/70 leading-relaxed">
                Structured learning paths covering all JLPT levels from N5 to N1, with progressive difficulty scaling 
                and content organized by language skills to ensure comprehensive preparation.
              </p>
            </div>
          </div>

          {/* Adaptive Learning System Card */}
          <div className="bg-[#faf5ef] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-[#333F72]/10"
               style={{backgroundImage: `url(${wave_pattern})`}}>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="bg-white rounded-xl p-6 shadow-sm relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaBrain className="text-[#E56E0C] text-xl" />
                    <span className="text-gray-800 font-bold">AI Powered</span>
                  </div>
                  <div className="bg-gradient-to-r from-[#E56E0C] to-[#ea580c] text-white px-3 py-1 rounded-full text-xs font-bold">
                    Smart
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-gradient-to-br from-[#333F72] to-[#1e293b] rounded-lg p-3 text-center">
                    <FaChartLine className="text-white text-2xl mx-auto mb-1" />
                    <div className="text-white text-xs font-bold">Progress</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#E56E0C] to-[#ea580c] rounded-lg p-3 text-center">
                    <FaTrophy className="text-white text-2xl mx-auto mb-1" />
                    <div className="text-white text-xs font-bold">Weak Points</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-3 text-center">
                    <FaClock className="text-white text-2xl mx-auto mb-1" />
                    <div className="text-white text-xs font-bold">Spaced Rep</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-3 text-center">
                    <FaBrain className="text-white text-2xl mx-auto mb-1" />
                    <div className="text-white text-xs font-bold">Adaptive</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#333F72] mb-3">
                Personalized Learning Paths
              </h3>
              <p className="text-[#333F72]/70 leading-relaxed">
                Our adaptive system recognizes error patterns, provides targeted practice, and uses spaced repetition 
                to optimize retention. Get personalized feedback based on your performance and progress.
              </p>
            </div>
          </div>

          {/* Realistic Test Simulation Card */}
          <div className="bg-[#faf5ef] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-[#333F72]/10"
               style={{backgroundImage: `url(${wave_pattern})`}}>
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#E56E0C] to-[#ea580c] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="text-gray-800 font-bold text-2xl mb-1">80%</div>
                  <div className="text-gray-600 text-sm">Pass Rate</div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-[#E56E0C] text-sm" />
                        <span className="text-gray-700 text-xs font-bold">Timed Tests</span>
                      </div>
                      <FaCheckCircle className="text-[#E56E0C]" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FaChartLine className="text-[#E56E0C] text-sm" />
                        <span className="text-gray-700 text-xs font-bold">Analytics</span>
                      </div>
                      <FaCheckCircle className="text-[#E56E0C]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaTrophy className="text-[#E56E0C] text-sm" />
                        <span className="text-gray-700 text-xs font-bold">Score Prediction</span>
                      </div>
                      <FaCheckCircle className="text-[#E56E0C]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#333F72] mb-3">
                Realistic Test Simulation
              </h3>
              <p className="text-[#333F72]/70 leading-relaxed">
                Practice with full-length JLPT tests and section-specific mini-tests in a timed environment that 
                mimics actual exam conditions. Get detailed analytics and score predictions for your performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}