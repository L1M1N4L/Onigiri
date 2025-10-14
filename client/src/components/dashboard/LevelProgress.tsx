
export default function LevelProgress() {
  const jlptLevels = [
    { level: "N5", progress: 100, status: "Completed" },
    { level: "N4", progress: 100, status: "Completed" },
    { level: "N3", progress: 65, status: "In Progress" },
    { level: "N2", progress: 0, status: "Not Started" },
    { level: "N1", progress: 0, status: "Not Started" }
  ];

  return (
    <div className="bg-[#faf5ef] rounded-2xl p-4 shadow-md h-full border-2 border-[#333F72]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#333F72]">JLPT Levels</h3>
        <span className="bg-[#E56E0C] text-white px-2 py-1 rounded-full text-xs font-medium">N3 Target</span>
      </div>
      
      <div className="space-y-3">
        {jlptLevels.map((level, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#333F72] w-6">{level.level}</span>
              <span className="text-xs text-[#333F72]/60">{level.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-[#333F72]/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    level.progress === 100 ? 'bg-green-500' : 
                    level.progress > 0 ? 'bg-[#E56E0C]' : 'bg-[#333F72]/20'
                  }`}
                  style={{ width: `${level.progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-[#333F72]/60 w-6 text-right">{level.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-[#333F72]/5 rounded-lg p-3 mb-4">
        <div className="text-center">
          <p className="text-sm font-bold text-[#333F72] mb-1">Next Milestone</p>
          <p className="text-xs text-[#333F72]/60">Complete 5 more grammar lessons</p>
        </div>
      </div>
      
      {/* Character Illustration */}
      <div className="text-center">
        <img src="https://via.placeholder.com/100x80/4c5a7f/ffffff?text=🎯" alt="level character" className="w-24 h-20 rounded-lg object-cover mx-auto" />
        <p className="text-xs text-[#333F72]/60 mt-1">Level up your skills!</p>
      </div>
    </div>
  );
}
