import Header from "../shared/components/Partials/Header";
import Hero from "../components/Menu/MenuHero";
import Sweets from "../components/Menu/TopList";
import SweetsItems from "../components/Menu/SweetsItems";
import MenuSlide from "../components/Menu/MenuSlide";

export default function Menu() {
  return (
    <div>
      <Header />
      <Hero />
      <Sweets />
      <MenuSlide />
      <SweetsItems />
    </div>
  );
}