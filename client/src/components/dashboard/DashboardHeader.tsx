import { useState } from "react";
import { useNavigate } from "react-router-dom";
import onigiri from "../../assets/ONIGIRI.svg";

export default function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const closeCoursesDropdown = () => {
    setIsCoursesDropdownOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 relative z-[999999]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={onigiri} alt="Onigiri" className="w-full h-full"/>
          </div>
          <span className="text-2xl font-bold text-[#333F72]">Onigiri</span>
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="flex gap-8 text-[#333F72]/70">
            <button onClick={() => navigate('/dashboard')} className="hover:text-[#333F72] transition-all duration-150 ease-in-out">Dashboard</button>
            <button onClick={() => navigate('/courses')} className="hover:text-[#333F72] transition-all duration-150 ease-in-out">Courses</button>
            <button className="hover:text-[#333F72] transition-all duration-150 ease-in-out">Flashcards</button>
            <button onClick={() => navigate('/simulation')} className="hover:text-[#333F72] transition-all duration-150 ease-in-out">Simulation</button>
            <button className="hover:text-[#333F72] transition-all duration-150 ease-in-out">Community</button>
          </nav>
          
          <div className="relative">
          <button 
            onClick={toggleDropdown}
            className="w-10 h-10 bg-[#E56E0C] rounded-full flex items-center justify-center text-white font-bold hover:bg-[#d46310] transition-all duration-150 ease-in-out"
          >
            U
          </button>
          
          <div className={`absolute right-0 mt-4 w-80 bg-[#faf5ef] rounded-2xl shadow-[0_20px_50px_rgba(51,63,114,0.15)] border-2 border-[#333F72] py-4 z-[999999] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isDropdownOpen 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}>
              {/* User Info Section */}
              <div className="px-6 py-5 border-b border-[#333F72]/20">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E56E0C] via-[#f97316] to-[#ea580c] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-[0_8px_32px_rgba(229,110,12,0.3)] ring-2 ring-[#E56E0C]/20">
                      U
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#333F72] font-semibold text-lg truncate">sadas</div>
                    <div className="text-[#333F72]/70 text-sm flex items-center gap-2 mt-1">
                      <span className="bg-[#E56E0C] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">Level 1</span>
                      <span className="bg-[#333F72]/10 text-[#333F72] px-3 py-1 rounded-full text-xs font-semibold shadow-sm">Free Plan</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Menu Items */}
              <div className="py-3">
                <button 
                  onClick={closeDropdown}
                  className="w-full px-6 py-3 text-left text-[#333F72] hover:bg-[#333F72]/10 transition-all duration-200 ease-out text-sm font-medium"
                >
                  Profile
                </button>
                
                <div className="px-6 py-2">
                  <div className="text-[#333F72] font-semibold text-sm mb-2 px-2">
                    Settings
                  </div>
                  <div className="ml-2 space-y-0.5">
                    <button 
                      onClick={closeDropdown}
                      className="w-full text-left text-[#333F72]/70 hover:text-[#333F72] hover:bg-[#333F72]/10 px-4 py-2.5 rounded-lg transition-all duration-200 ease-out text-sm font-medium"
                    >
                      App
                    </button>
                    <button 
                      onClick={closeDropdown}
                      className="w-full text-left text-[#333F72]/70 hover:text-[#333F72] hover:bg-[#333F72]/10 px-4 py-2.5 rounded-lg transition-all duration-200 ease-out text-sm font-medium"
                    >
                      Account
                    </button>
                    <button 
                      onClick={closeDropdown}
                      className="w-full text-left text-[#333F72]/70 hover:text-[#333F72] hover:bg-[#333F72]/10 px-4 py-2.5 rounded-lg transition-all duration-200 ease-out text-sm font-medium"
                    >
                      Customize Dashboard
                    </button>
                    <button 
                      onClick={closeDropdown}
                      className="w-full text-left text-[#333F72]/70 hover:text-[#333F72] hover:bg-[#333F72]/10 px-4 py-2.5 rounded-lg transition-all duration-200 ease-out text-sm font-medium"
                    >
                      API Tokens
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={closeDropdown}
                  className="w-full px-6 py-3 text-left text-[#333F72] hover:bg-[#333F72]/10 transition-all duration-200 ease-out text-sm font-medium"
                >
                  Subscription
                </button>
                
                <div className="mx-6 my-3 h-px bg-[#333F72]/20"></div>
                
                <button 
                  onClick={closeDropdown}
                  className="w-full px-6 py-3 text-left text-red-600 hover:bg-red-50 transition-all duration-200 ease-out text-sm font-medium"
                >
                  Sign Out
                </button>
                
                <div className="mx-6 my-3 h-px bg-[#333F72]/20"></div>
                
                <button 
                  onClick={closeDropdown}
                  className="w-full px-6 py-3 text-left text-[#333F72] hover:bg-[#333F72]/10 transition-all duration-200 ease-out text-sm font-medium"
                >
                  Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
