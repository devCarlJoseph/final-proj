import Header from "../shared/components/Partials/Header";
import GalleryIntro from "../components/Gallery/GalleryIntro";
import GalleryContent from "../components/Home/Gallery";
import Footer from "../shared/components/Partials/Footer"


export default function Gallery() {
  return (
    <div>
      <Header />
      <GalleryIntro />
      <GalleryContent />
      <Footer />
    </div>
  );
}