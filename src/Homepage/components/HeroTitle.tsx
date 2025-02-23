import React from "react";

interface HeroTitleProps {
  title: string;
  subtitle?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle }) => {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-[#14274E] leading-tight">
      {title}
      {subtitle && <span className="block mt-2">{subtitle}</span>}
    </h1>
  );
};

export default HeroTitle;
