import React from 'react';

export default function DashboardStats() {
  return (
    <div className="space-y-4 relative z-0">
      {/* Practice Completed */}
      <div className="bg-[#faf5ef] rounded-2xl p-4 shadow-md border-2 border-[#333F72]">
        <div className="text-center">
          <div className="relative inline-block mb-3 z-0">
            <img src="https://via.placeholder.com/50x50/4c5a7f/ffffff?text=🎯" alt="completed" className="w-14 h-14 rounded-xl object-cover" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center z-0">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333F72] mb-1">156</p>
          <p className="text-[#333F72]/60 text-xs mb-2">Questions Completed</p>
          <p className="text-[#333F72]/40 text-xs mb-3">This Week</p>
          <div className="bg-[#333F72]/5 rounded-lg p-2">
            <p className="text-[#333F72]/60 text-xs">Last Week: <span className="text-[#333F72] font-semibold">142</span></p>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="bg-[#faf5ef] rounded-2xl p-4 shadow-md border-2 border-[#333F72]">
        <h3 className="text-lg font-bold text-[#333F72] mb-3">
          Focus Areas
        </h3>
        <div className="space-y-3">
          <div className="bg-[#E56E0C]/5 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#333F72] font-medium text-sm">文章の文法</p>
              <span className="text-[#E56E0C] text-sm font-bold">40%</span>
            </div>
            <div className="w-full bg-[#333F72]/10 rounded-full h-1.5">
              <div className="bg-[#E56E0C] h-1.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <p className="text-[#333F72]/60 text-xs mt-1">Needs improvement</p>
          </div>
          
          <div className="bg-[#333F72]/5 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#333F72] font-medium text-sm">語形成</p>
              <span className="text-[#E56E0C] text-sm font-bold">45%</span>
            </div>
            <div className="w-full bg-[#333F72]/10 rounded-full h-1.5">
              <div className="bg-[#E56E0C] h-1.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-[#333F72]/60 text-xs mt-1">Keep practicing</p>
          </div>
        </div>
        
        <button className="w-full mt-3 bg-[#E56E0C] text-white py-2 rounded-xl text-sm font-medium hover:bg-[#d46310] transition-colors">
          Practice Weak Areas
        </button>
        
        {/* Character Illustration */}
        <div className="mt-4 text-center">
          <img src="https://via.placeholder.com/80x60/4c5a7f/ffffff?text=💪" alt="focus character" className="w-20 h-16 rounded-lg object-cover mx-auto" />
          <p className="text-xs text-[#333F72]/60 mt-1">You've got this!</p>
        </div>
      </div>
    </div>
  );
}
