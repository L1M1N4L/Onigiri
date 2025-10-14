import React from 'react';

export default function StudyStreak() {
  return (
    <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md h-full border-2 border-[#333F72]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#333F72]">Study Streak</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#E56E0C] rounded-full animate-pulse"></div>
          <span className="text-sm text-[#333F72]/60">Active</span>
        </div>
      </div>
      
      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-[#333F72] mb-1">7<span className="text-2xl text-[#E56E0C]">日</span></div>
        <p className="text-[#333F72]/60 text-sm">Current streak</p>
      </div>
      
      <div className="bg-[#333F72]/5 rounded-xl p-4 mb-6">
        <div className="flex gap-2 mb-3 justify-between text-xs text-[#333F72]/60 font-medium">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'].map((d, i) => (
            <span key={d} className={`${i === 6 ? 'text-[#E56E0C] font-bold' : ''}`}>{d}</span>
          ))}
        </div>
        <div className="flex gap-2 justify-between">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`w-6 h-6 rounded-lg flex items-center justify-center ${
              i < 7 ? 'bg-[#E56E0C] shadow-sm' : 'bg-[#333F72]/10'
            }`}>
              {i < 7 && <span className="text-white text-xs font-bold">✓</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-[#333F72]/60 text-sm mb-1">Best Streak</p>
          <p className="text-lg font-bold text-[#333F72]">14<span className="text-sm text-[#E56E0C]">日</span></p>
        </div>
        <div className="text-center">
          <p className="text-[#333F72]/60 text-sm mb-1">Total Study</p>
          <p className="text-lg font-bold text-[#333F72]">42<span className="text-sm text-[#E56E0C]">時間</span></p>
        </div>
      </div>
      
      {/* Character Illustration */}
      <div className="mt-6 text-center">
        <img src="https://via.placeholder.com/120x80/4c5a7f/ffffff?text=🔥" alt="streak character" className="w-32 h-20 rounded-xl object-cover mx-auto" />
        <p className="text-xs text-[#333F72]/60 mt-2">Keep the fire burning!</p>
      </div>
    </div>
  );
}
