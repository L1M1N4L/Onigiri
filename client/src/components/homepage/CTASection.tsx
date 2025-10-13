
import { NavLink } from 'react-router-dom';
import StyledButton from './StyledButton';

export default function OnigiriPracticeSection() {
  return (
    <section className="py-20 bg-[#faf5ef] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h1 className="text-5xl font-bold text-[#333F72] mb-6 leading-tight">
              Ready to master<br/><span className="text-[#E56E0C]">Japanese?</span>
            </h1>

            <p className="text-[#333F72]/70 text-lg leading-relaxed mb-8">
              Join 25K+ learners already mastering Japanese with Onigiri. 
              Start your journey today - it's free!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <StyledButton>Start Learning Free</StyledButton>
              <NavLink 
                to="/signup"
                className="px-12 py-4 border-2 border-[#333F72]/20 text-[#333F72] rounded-tl-3xl rounded-br-3xl hover:border-[#333F72] hover:bg-[#333F72] hover:text-white transition-all duration-300 font-semibold text-lg text-center">
                Watch Demo
              </NavLink>
            </div>
          </div>

          {/* Right Side - Background App Interface */}
          <div className="relative h-full min-h-[600px] bg-gradient-to-b from-[#333F72]/10 via-[#E56E0C]/5 to-transparent rounded-t-3xl overflow-hidden">
            {/* Placeholder UI Elements */}
            <div className="absolute top-0 left-8 right-8">
              <div className="flex gap-4 mb-6 mt-8">
                <div className="h-8 w-24 bg-[#333F72]/20 rounded-lg"></div>
                <div className="h-8 w-28 bg-[#E56E0C]/20 rounded-lg"></div>
                <div className="h-8 w-20 bg-[#333F72]/20 rounded-lg"></div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="h-12 bg-white rounded-lg shadow-sm border border-[#333F72]/10"></div>
                <div className="h-12 bg-white rounded-lg shadow-sm border border-[#333F72]/10"></div>
                <div className="h-12 bg-white rounded-lg shadow-sm border border-[#333F72]/10"></div>
                <div className="h-12 bg-white rounded-lg shadow-sm border border-[#333F72]/10"></div>
              </div>
              <div className="h-10 bg-[#333F72] rounded-lg mb-4"></div>
              
              {/* Course Cards */}
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-3 shadow-sm flex gap-3 border border-[#333F72]/10">
                  <div className="w-20 h-16 bg-gradient-to-br from-[#E56E0C] to-[#f97316] rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-[#333F72]/30 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-[#333F72]/20 rounded w-full mb-1"></div>
                    <div className="h-2 bg-[#333F72]/20 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm flex gap-3 border border-[#333F72]/10">
                  <div className="w-20 h-16 bg-gradient-to-br from-[#333F72] to-[#1e293b] rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-[#333F72]/30 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-[#333F72]/20 rounded w-full mb-1"></div>
                    <div className="h-2 bg-[#333F72]/20 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center z-10">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-[#333F72] font-semibold text-lg">Practice App Interface</p>
                <p className="text-[#333F72]/60 text-sm mt-2">Interactive learning dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}