import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

const HeroGrid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid gap-16 md:grid-cols-2 items-center">{children}</div>;
};

export default HeroGrid;
