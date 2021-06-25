import { Hero } from "../components";
import { OptFormContainer } from "./OptForm";

export function HomeHeroContainer() {
  return (
    <Hero>
      <Hero.Background src={"/images/misc/home-bg.jpg"}>
        <Hero.Title>Unlimited movies, TV shows, and more.</Hero.Title>
        <Hero.SubTitle>Watch anywhere. Cancel anytime.</Hero.SubTitle>
        <div>
          <OptFormContainer id="heroFormId" />
        </div>
      </Hero.Background>
    </Hero>
  );
}
