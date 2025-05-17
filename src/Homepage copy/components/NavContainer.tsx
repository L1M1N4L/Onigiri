import React from "react";

interface NavigationProps {
  children: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({children}) => {
  return (
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
            {children}
        </div>

  );
};

export default Navigation;
