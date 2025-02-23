import React from "react";

const HeroStats: React.FC = () => {
  const stats = [
    { value: "200+", label: "Interactive Lessons" },
    { value: "50K+", label: "Active Learners" },
    { value: "4.8/5", label: "Student Rating" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-[#14274E]">{stat.value}</div>
          <div className="text-sm text-[#14274E]/70">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
