import React from "react";
import LogoNav from "./LogoNav";
import ButtonList from "./ButtonList";

const Navigation: React.FC = () => {
  return (
    <>
      <LogoNav />
      <ButtonList 
        primaryText="Start Learning" 
        setLogin="Log In" 
        primaryAction={() => console.log("Start Learning clicked")} 
        secondaryAction={() => console.log("Log In clicked")} 
      />
    </>
  );
};

export default Navigation;
