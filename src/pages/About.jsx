import Header from "../shared/components/Partials/Header";
import AboutIntro from "../components/About/AboutIntro";
import AboutPartial from "../components/Home/AboutPartial";
import Mission from "../components/About/Mission";
import WhyChoose from "../components/Home/WhyChoose";
import Reserve from "../components/Home/Reserve";
import OurAward from "../components/About/OurAward";
import Chef from "../components/Home/Chef";
import GlimpseOf from "../components/Home/GlimpseOf"
import Footer from "../shared/components/Partials/Footer";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Faq from "../components/Home/Faq"


export default function About() {
  return (
    <div>
      <Header />
      <AboutIntro />
      <AboutPartial />
      <Mission />
      <WhyChoose />
      <Testimonial />
      <OurAward />
      <Reserve />
      <Chef />
      <Faq />
      <Footer />
    </div>
  );
}