import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleDetailHero from "../../components/ArticleDetailHero";
import ArticleContent from "../../components/ArticleContent";
import RelatedArticles from "../../components/RelatedArticles";
import RecommendedArticles from "../../components/RecommendedArticles";

// Data artikel tentang Weda Bay
const articleData = {
  id: 1,
  title: "Ancaman Dari Weda Bay ?",
  subtitle: "Bahaya Tak Terlihat di Maluku Utara",
  date: "Juli, 23 2025",
  image: "/img/hero2.jpg", // Gambar industri untuk artikel Weda Bay
  content: `Pertambangan nikel di Halmahera, Maluku Utara, telah menimbulkan dampak lingkungan dan kesehatan yang serius. PT Weda Bay Nickel dan Indonesia Weda Bay Industrial Park (IWIP) telah mengubah lanskap alam yang sebelumnya hijau menjadi area industri yang luas.

Menurut data dari @halodoc, kasus ISPA (Infeksi Saluran Pernafasan Akut) di wilayah sekitar tambang meningkat signifikan. Udara yang tercemar oleh debu nikel dan partikel berbahaya lainnya menjadi ancaman serius bagi kesehatan masyarakat setempat.

Selain udara, air tanah dan sungai di sekitar area tambang juga tercemar oleh logam berat seperti nikel, merkuri, dan timbal. Kontaminasi ini tidak hanya berdampak pada ekosistem perairan, tetapi juga pada kesehatan jangka panjang masyarakat yang mengonsumsi air dan ikan dari wilayah tersebut.`
};

const relatedArticles = [
  {
    id: 2,
    title: "Raja Ampat, Tambang Nikel, dan Kenapa Kita Harus Peduli?",
    date: "Juni, 20 2025",
    image: "/img/hero1.jpg"
  },
  {
    id: 3,
    title: "Disana Panas Ekstrem, Disini Panas Hebat",
    date: "Juli, 14 2025",
    image: "/img/hero3.jpg"
  }
];

const recommendedArticles = [
  {
    id: 4,
    title: "Fast Fashion VS Sustainable Fashion Pilihan style-mu, menentukan masa depan bumi!",
    date: "Agustus, 12 2025",
    image: "/img/hero1.jpg"
  },
  {
    id: 5,
    title: "Tidak Semua Botol Plastik Bisa Didaur Ulang Lho!",
    date: "Juli, 10 2025",
    image: "/img/hero2.jpg"
  },
  {
    id: 6,
    title: "\"Save Our World\" Ketika Musik Jadi Seruan untuk Menjaga Bumi",
    date: "Juli, 8 2025",
    image: "/img/hero3.jpg"
  },
  {
    id: 7,
    title: "Mengenal Energi Terbarukan",
    date: "Juni 30 2025",
    image: "/img/hero1.jpg"
  },
  {
    id: 8,
    title: "Gimana Perang Bikin Lingkungan Makin Menderita?",
    date: "Juni, 27 2025",
    image: "/img/hero2.jpg"
  },
  {
    id: 9,
    title: "Menanam Kesadaran, Merawat Masa Depan",
    date: "Juni, 16 2025",
    image: "/img/hero3.jpg"
  }
];

export default function WedaBayArticlePage() {
  return (
    <div className="article-page">
      <Navbar />
      
      {/* Hero Section */}
      <ArticleDetailHero
        image={articleData.image}
        date={articleData.date}
        title={articleData.title}
        subtitle={articleData.subtitle}
      />
      
      {/* Main Content with Sidebar */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Article Content */}
          <div className="flex-1">
            <ArticleContent content={articleData.content} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      </div>
      
      {/* Recommended Articles */}
      <RecommendedArticles articles={recommendedArticles} />
      
      <Footer />
    </div>
  );
}
