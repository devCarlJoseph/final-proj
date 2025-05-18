import Header from "../shared/components/Partials/Header";
import Intro from "../components/Contact/ContactIntro"
import Content from "../components/Contact/ContactContent"
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";
import Footer from "../shared/components/Partials/Footer";


export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Intro />
      <Content />
      <ContactInfo />
      <ContactMap />
      <Footer />
    </div>
  );
}