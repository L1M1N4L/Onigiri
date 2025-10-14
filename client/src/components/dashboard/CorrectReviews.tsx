
export default function CorrectReviews() {
  return (
    <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md h-full border-2 border-[#333F72]">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <img src="https://via.placeholder.com/60x60/4c5a7f/ffffff?text=📊" alt="stats" className="w-16 h-16 rounded-xl object-cover" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">↑</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#333F72] mb-2">Accuracy Rate</h3>
        <p className="text-4xl font-bold text-[#E56E0C] mb-2">78.5%</p>
        <p className="text-[#333F72]/60 text-sm mb-2">Past 7 Days</p>
        <p className="text-[#333F72]/40 text-xs mb-4">Above JLPT passing threshold</p>
        
        <div className="bg-[#333F72]/5 rounded-lg p-3 mb-4">
          <p className="text-[#333F72]/60 text-xs">Previous Period: <span className="text-[#333F72] font-semibold">72.3%</span></p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 text-center mb-4">
          <div>
            <p className="text-lg font-bold text-[#333F72]">85%</p>
            <p className="text-xs text-[#333F72]/60">Grammar</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#333F72]">72%</p>
            <p className="text-xs text-[#333F72]/60">Reading</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#333F72]">78%</p>
            <p className="text-xs text-[#333F72]/60">Listening</p>
          </div>
        </div>
        
        {/* Character Illustration */}
        <div className="text-center">
          <img src="https://via.placeholder.com/120x80/4c5a7f/ffffff?text=🏆" alt="achievement character" className="w-32 h-20 rounded-xl object-cover mx-auto" />
          <p className="text-xs text-[#333F72]/60 mt-2">Great job! Keep it up!</p>
        </div>
      </div>
    </div>
  );
}
