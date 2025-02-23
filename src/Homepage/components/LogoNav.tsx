import React from "react";

const Navigation: React.FC = () => {
  return (
    <>
          <div className="flex items-center gap-2">
            <img
                src="src/Homepage/assets/ONIGIRI.svg"
                alt="ONIGIRI Logo"
                className="w-10 h-10"
            />
            <span className="text-xl font-bold text-[#14274E]">ONIGIRI</span>
          </div>
    </>
  );
};

export default Navigation;
