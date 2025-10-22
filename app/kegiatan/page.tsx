import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KegiatanHero from "../components/KegiatanHero";
import ActivityGallery from "../components/ActivityGallery";

export default function KegiatanPage() {
  return (
    <div>
      <Navbar />
      <KegiatanHero />
      <ActivityGallery />
      <Footer />
    </div>
  );
}
