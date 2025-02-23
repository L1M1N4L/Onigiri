import React from "react";

interface HeroBadgeProps {
  text: string;
}

const HeroBadge: React.FC<HeroBadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex max-w-max px-4 py-2 mb-6 text-sm font-medium bg-[#14274E]/10 text-[#14274E] rounded-full">
      {text}
    </div>
  );
};

export default HeroBadge;
