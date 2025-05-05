import Header from "../shared/components/Partials/Header";
import Hero from "../components/Menu/MenuIntro";
import Sweets from "../components/Menu/TopList";
import MenuSlide from "../components/Menu/MenuSlide";
import MainMenuItems from "../components/Menu/MainMenuItems";
import Footer from "../shared/components/Partials/Footer"

export default function Menu() {

 
  return (
    <div>
      <Header />
      <Hero />
      <Sweets />
      <MenuSlide />
      <MainMenuItems />
      <Footer />
    </div>
  );
}