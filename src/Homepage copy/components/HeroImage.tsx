import React from "react";

const HeroImage: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#14274E]/10 rounded-3xl transform rotate-3"></div>
      <img 
        src="src/Homepage/assets/istockphoto-471051237-612x612.jpg"
        alt="Japanese Learning Materials"
        className="relative rounded-3xl shadow-xl"
      />
    </div>
  );
};

export default HeroImage;
