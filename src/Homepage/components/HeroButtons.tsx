import React from "react";
import Button from "./Button";

interface HeroButtonProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

const HeroButton: React.FC<HeroButtonProps> = ({ onJoinClick, onExploreClick }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <Button onClick={onJoinClick} className="px-6 py-3 text-[#ECE7E2] bg-[#14274E] rounded-lg hover:bg-[#14274E]/90">
        Join Free
      </Button>
      <Button onClick={onExploreClick} className="px-6 py-3 text-[#ECE7E2] bg-[#14274E]/10 rounded-lg hover:bg-[#14274E]/90">
        Explore Courses
      </Button>
    </div>
  );
};

export default HeroButton;
