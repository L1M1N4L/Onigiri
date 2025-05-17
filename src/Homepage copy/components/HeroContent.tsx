import React from "react";

import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";

const HeroContent: React.FC = () => {
  return (
    <>
      <div>
        {" "}
        <HeroLeft />
      </div>
      <div>
        <HeroRight />
      </div>
    </>
  );
};

export default HeroContent;
