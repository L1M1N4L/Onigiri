import React from "react";

interface HeroDescriptionProps {
  text: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ text }) => {
  return <p className="mt-6 text-xl text-[#14274E]/80">{text}</p>;
};

export default HeroDescription;
