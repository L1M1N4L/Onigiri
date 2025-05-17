import React, { ReactNode } from "react";

interface SectWrapperProps {
  children: ReactNode;
}

const SectionWrapper: React.FC<SectWrapperProps> = ({ children }) => {
  return <div className="py-20 bg-white">{children}</div>;
};

export default SectionWrapper;