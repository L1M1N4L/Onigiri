import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const HeroContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-6 mx-auto max-w-7xl">{children}</div>;
};

export default HeroContainer;
