
export default function JLPTProgress() {
  const jlptSections = [
    {
      title: "言語知識",
      subtitle: "文字・語彙・文法",
      icon: "📝",
      items: [
        { name: "漢字読み", progress: 75 },
        { name: "表記", progress: 60 },
        { name: "語形成", progress: 45 },
        { name: "文脈規定", progress: 80 },
        { name: "言い換え類義", progress: 55 },
        { name: "用法", progress: 70 },
        { name: "文の文法1", progress: 65 },
        { name: "文の文法2", progress: 50 },
        { name: "文章の文法", progress: 40 }
      ]
    },
    {
      title: "読解",
      subtitle: "Reading Comprehension",
      icon: "📖",
      items: [
        { name: "内容理解（短文）", progress: 85 },
        { name: "内容理解（中文）", progress: 70 },
        { name: "統合理解", progress: 60 },
        { name: "主張理解（長文）", progress: 45 },
        { name: "情報検索", progress: 90 }
      ]
    },
    {
      title: "聴解",
      subtitle: "Listening Comprehension",
      icon: "🎧",
      items: [
        { name: "課題理解", progress: 80 },
        { name: "ポイント理解", progress: 65 },
        { name: "概要理解", progress: 55 },
        { name: "即時応答", progress: 70 },
        { name: "統合理解", progress: 60 }
      ]
    }
  ];

  return (
    <div className="bg-[#faf5ef] rounded-2xl p-6 shadow-md border-2 border-[#333F72]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#333F72]">JLPT Progress</h3>
        <span className="bg-[#E56E0C] text-white px-3 py-1 rounded-full text-sm font-medium">N3 Level</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {jlptSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border border-[#333F72]/10 rounded-xl p-4">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{section.icon}</span>
                <h4 className="text-lg font-bold text-[#333F72]">{section.title}</h4>
              </div>
              <p className="text-sm text-[#333F72]/60">{section.subtitle}</p>
            </div>
            
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#333F72]">{item.name}</span>
                    <span className="text-xs text-[#333F72]/60 font-medium">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-[#333F72]/10 rounded-full h-2">
                    <div 
                      className="bg-[#E56E0C] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Character Illustration */}
      <div className="mt-6 text-center">
        <img src="https://via.placeholder.com/200x100/4c5a7f/ffffff?text=🎌" alt="jlpt character" className="w-48 h-24 rounded-xl object-cover mx-auto" />
        <p className="text-sm text-[#333F72]/60 mt-2">Master each section step by step!</p>
      </div>
    </div>
  );
}
