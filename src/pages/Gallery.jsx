import Header from "../shared/components/Partials/Header";
import GalleryIntro from "../components/Gallery/GalleryIntro";
import GalleryContent from "../components/Home/Gallery";
import NewCont from "../components/Gallery/NewCont"
import Footer from "../shared/components/Partials/Footer"


export default function Gallery() {
  return (
    <div>
      <Header />
      <GalleryIntro />
      <GalleryContent />
      <NewCont />
      <Footer />
    </div>
  );
}