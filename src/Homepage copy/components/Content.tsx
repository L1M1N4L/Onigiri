import React from "react";
import LogoNav from "./LogoNav";
import ButtonList from "./ButtonList";

const Navigation: React.FC = () => {
  return (
    <>
      <LogoNav />
      <ButtonList 
        SignUpText="Start Learning" 
        setLoginText="Log In" 
        SignupAction={() => console.log("Start Learning clicked")} 
        LoginAction={() => console.log("Log In clicked")} 
      />
    </>
  );
};

export default Navigation;
