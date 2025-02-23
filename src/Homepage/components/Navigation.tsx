import React, { ReactNode } from "react";

interface NavigationProps {
  children?: ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      {children}
    </nav>
  );
};

export default Navigation;
