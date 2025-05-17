import React, { ReactNode } from "react";

interface HeroProps {
  children?: ReactNode;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({children}) => {
  return ( 
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#ECE7E2]">
    {children}
    </section>
  );
};

export default Hero;
