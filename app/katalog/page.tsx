import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KatalogHero from "../components/KatalogHero";
import KatalogIntro from "../components/KatalogIntro";
import DestinationCard from "../components/DestinationCard";

const destinations = [
  {
    image: "/img/lumbungstroberi.png",
    title: "Lumbung Stroberi",
    location: "Pandanrejo, Bumiaji, Kota Batu",
    desc: "Nikmati pengalaman memetik stroberi langsung dari kebunnya di Perkebunan Stroberi Pandanrejo, Kota Batu."
  },
  {
    image: "/img/about.png",
    title: "Perkebunan Bunga Tangan",
    location: "Pandanrejo, Bumiaji, Kota Batu",
    desc: "Perkebunan Bunga di Batu menawarkan pemandangan indah sekaligus kesempatan untuk belajar tentang budidaya bunga."
  },
  {
    image: "/img/hero1.jpg",
    title: "Perkebunan Jeruk",
    location: "Desa Wisata Madiredo",
    desc: "Menikmati jeruk segar langsung dari pohonnya, peserta juga dapat mempelajari teknik budidaya jeruk yang ramah lingkungan."
  },
  {
    image: "/img/perkebunanherbal.png",
    title: "Perkebunan Tanaman Herbal",
    location: "Desa Wisata Madiredo",
    desc: "Tempat yang sempurna untuk belajar tentang manfaat dan cara budidaya tanaman herbal."
  },
  {
    image: "/img/perkebunanapel.png",
    title: "Perkebunan Apel",
    location: "Desa Wisata Madiredo",
    desc: "Destinasi ideal untuk menikmati apel segar langsung dari pohonnya dan belajar tentang budidaya apel."
  },
  {
    image: "/img/about1.png",
    title: "Pertanian Sayur",
    location: "Desa Wisata Madiredo",
    desc: "Pertanian Sayur menawarkan pengalaman edukatif tentang penanaman sayuran organik."
  },
  {
    image: "/img/peternakansapi.png",
    title: "Peternakan Sapi Perah",
    location: "Desa Wisata Madiredo",
    desc: "Peternakan Sapi Perah memberikan kesempatan untuk belajar tentang industri susu yang berkelanjutan."
  },
  {
    image: "/img/hero2.jpg",
    title: "Tempat Pengolahan Sampah Terpadu",
    location: "Desa Wisata Madiredo",
    desc: "Tempat Pengolahan Sampah Terpadu adalah pusat edukasi tentang manajemen sampah yang efektif."
  }
];

export default function KatalogPage() {
  return (
    <div className="article-page">
      <Navbar />
      <KatalogHero />
      <KatalogIntro />
      
      {/* Destination Cards Grid */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              title={destination.title}
              location={destination.location}
              desc={destination.desc}
            />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
