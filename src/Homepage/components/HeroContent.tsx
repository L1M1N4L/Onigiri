import React from "react";
import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import HeroImage from "./HeroImage";

const HeroContent: React.FC = () => {
  return (
    <>
      <div>
        <HeroBadge text="In partnership with Kouyou Institute" />
        <HeroTitle title="Learn Japanese" subtitle="Anytime, Anywhere" />
        <HeroDescription text="Experience the best of both worlds with ONIGIRI - a modern online learning platform powered by Kouyou Institute's proven Japanese teaching methodology." />
        <HeroButtons 
          onJoinClick={() => console.log("Join Free clicked")} 
          onExploreClick={() => console.log("Explore Courses clicked")} 
        />
      </div>
      
      <div>
        <HeroImage />
        <HeroStats />
      </div>
    </>
  );
};

export default HeroContent;
