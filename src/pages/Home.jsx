
import { useEffect, useState } from "react";
import Background from "../components/Home/Background/Background"
import Hero from "../components/Home/Hero/Hero";
import SectionTwo from '../components/Home/AboutPartial';
import SectionThree from "../components/Home/MenuPartial";
import SectionFour from "../components/Home/Offers";
import SectionSix from "../components/Home/Chef";
import SectionSeven from "../components/Home/Testimonial/Testimonial"
import SectionNine from "../components/Home/WhyChoose"
import SectionTen from "../components/Home/Gallery"
import SectionEleven from "../components/Home/Reserve"
import Faq from "../components/Home/Faq";

export default function Home() {
  let heroData = [
    { text1: "Delicous Dishes", text2: "Memorable Moments" },
    { text1: "Exceptional", text2: "Dining Experience!" },
    { text1: "A Culinary Experiece of", text2: "Elegance and Excellence" },
  ]
  
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);
  }, [])


  return (
    <div>
      <Background heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionSeven />
      <SectionNine />
      <SectionEleven />
      <SectionSix />
      <Faq />
      <SectionTen />
    </div>
  );
}