import HeroContainer from "./HeroContainer";
import { FC } from "react";

const HeroLeft: FC = () => {
  const onClick = (): void => {};

  return (
    <HeroContainer>
      <HeroContainer.Badge>
        In partnership with Kouyou Institute
      </HeroContainer.Badge>
      <HeroContainer.TitleContainer>
        <HeroContainer.Title>Learn Japanese</HeroContainer.Title>
        <HeroContainer.Subtitle>Anytime, Anywhere</HeroContainer.Subtitle>
      </HeroContainer.TitleContainer>
      <HeroContainer.Description>
        Experience the best of both worlds with ONIGIRI - a modern online
        learning platform powered by Kouyou Institute's proven Japanese teaching
        methodology.
      </HeroContainer.Description>
      <HeroContainer.Buttons>
        <HeroContainer.Button onClick={onClick}>Join Free</HeroContainer.Button>
        <HeroContainer.Button onClick={onClick}>
          Explore Courses
        </HeroContainer.Button>
      </HeroContainer.Buttons>
    </HeroContainer>
  );
};

export default HeroLeft;
