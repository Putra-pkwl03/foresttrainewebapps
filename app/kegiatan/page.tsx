import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KegiatanHero from "../components/KegiatanHero";
import ActivityGallery from "../components/ActivityGallery";

export default function KegiatanPage() {
  return (
    <div className="article-page kegiatan-page">
      <Navbar />
      <KegiatanHero />
      <ActivityGallery />
      <Footer />
    </div>
  );
}
