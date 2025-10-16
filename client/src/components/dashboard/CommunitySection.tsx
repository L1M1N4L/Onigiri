import React from 'react';

export default function CommunitySection() {
  return (
    <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md h-full border-2 border-[#333F72]">
      <div className="text-center">
        <img src="https://via.placeholder.com/200x100/4c5a7f/ffffff?text=👥" alt="community" className="w-full h-24 rounded-xl object-cover mb-4" />
        <h3 className="text-xl font-bold text-[#333F72] mb-2">JLPT Study Community</h3>
        <p className="text-[#333F72]/60 text-sm mb-4">Connect with fellow JLPT test-takers</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#E56E0C]/5 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-[#333F72]">1,247</p>
            <p className="text-xs text-[#333F72]/60">Active Members</p>
          </div>
          <div className="bg-[#333F72]/5 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-[#333F72]">N3</p>
            <p className="text-xs text-[#333F72]/60">Your Level</p>
          </div>
        </div>
        
        <button className="w-full bg-[#E56E0C] text-white py-2 rounded-xl font-medium hover:bg-[#d46310] transition-colors mb-4">
          Join Study Group
        </button>
        
        {/* Character Illustration */}
        <div className="text-center">
          <img src="https://via.placeholder.com/120x80/4c5a7f/ffffff?text=🤝" alt="community character" className="w-32 h-20 rounded-xl object-cover mx-auto" />
          <p className="text-xs text-[#333F72]/60 mt-2">Together we learn better!</p>
        </div>
      </div>
    </div>
  );
}
