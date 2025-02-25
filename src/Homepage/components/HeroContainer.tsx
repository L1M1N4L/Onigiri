/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createContext, ReactNode } from "react";

// Remove the Badge import from lucide-react as it's not being used and conflicts with the Badge component
// import { Badge } from "lucide-react";

interface HeroContextType {
  // Add any context values here if needed
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

interface HeroContainerProps {
  children: ReactNode;
}

function HeroContainer({ children }: HeroContainerProps) {
  return (
    <HeroContext.Provider value={undefined}>{children}</HeroContext.Provider>
  );
}

interface BadgeProps {
  children: ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex max-w-max px-4 py-2 mb-6 text-sm font-medium bg-[#14274E]/10 text-[#14274E] rounded-full">
      {children}
    </div>
  );
}

interface TitleContainerProps {
  children: ReactNode;
}

function TitleContainer({ children }: TitleContainerProps) {
  return (
    <div className="text-4xl md:text-6xl font-bold text-[#14274E] leading-tight">
      {children}
    </div>
  );
}

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return <>{children}</>;
}

interface SubtitleProps {
  children: ReactNode;
}

function Subtitle({ children }: SubtitleProps) {
  return <>{children}</>;
}

interface DescriptionProps {
  children: ReactNode;
}

function Description({ children }: DescriptionProps) {
  return <p className="mt-6 text-xl text-[#14274E]/80">{children}</p>;
}

interface ButtonsProps {
  children: ReactNode;
}

function Buttons({ children }: ButtonsProps) {
  return <p className="flex flex-wrap gap-4 mt-8">{children}</p>;
}

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <p
      onClick={onClick}
      className="px-6 py-3 text-[#ECE7E2] bg-[#14274E] rounded-lg hover:bg-[#14274E]/90"
    >
      {children}
    </p>
  );
}

HeroContainer.Badge = Badge;
HeroContainer.TitleContainer = TitleContainer;
HeroContainer.Title = Title;
HeroContainer.Subtitle = Subtitle;
HeroContainer.Description = Description;
HeroContainer.Buttons = Buttons;
HeroContainer.Button = Button;

export default HeroContainer;
