import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleDetailHero from "../../components/ArticleDetailHero";
import ArticleContent from "../../components/ArticleContent";
import RelatedArticles from "../../components/RelatedArticles";
import RecommendedArticles from "../../components/RecommendedArticles";

// Data artikel tentang Polusi Plastik
const articleData = {
  id: 5,
  title: "Dampak Nyata Polusi Plastik",
  subtitle: "Dari Merusak Alam Sampai Masuk Ke Makanan Kita",
  date: "Juli, 29 2025",
  image: "/img/hero1.jpg",
  content: `Setiap menit, 1 truk sampah plastik dibuang ke laut. Jika dibiarkan, di tahun 2050 jumlah plastik di laut bisa lebih banyak daripada jumlah ikan. Ini bukan sekadar prediksi, tetapi kenyataan yang sudah mulai terlihat di berbagai belahan dunia.

Plastik yang masuk ke laut tidak hilang begitu saja. Mereka terurai menjadi mikroplastik yang berukuran sangat kecil, bahkan lebih kecil dari sebutir pasir. Mikroplastik ini kemudian dimakan oleh ikan dan hewan laut lainnya, yang pada akhirnya masuk ke dalam rantai makanan manusia.

Penelitian terbaru menunjukkan bahwa manusia mengonsumsi sekitar 5 gram plastik setiap minggu - setara dengan berat satu kartu kredit. Plastik ini masuk melalui air minum, makanan laut, dan bahkan udara yang kita hirup. Dampak jangka panjangnya terhadap kesehatan manusia masih terus diteliti, tetapi sudah jelas bahwa ini adalah masalah serius yang perlu segera ditangani.`
};

const relatedArticles = [
  {
    id: 7,
    title: "Tidak Semua Botol Plastik Bisa Didaur Ulang Lho!",
    date: "Juli, 10 2025",
    image: "/img/about.png"
  },
  {
    id: 2,
    title: "Fast Fashion VS Sustainable Fashion Pilihan style-mu, menentukan masa depan bumi!",
    date: "Agustus, 12 2025",
    image: "/img/hero3.jpg"
  }
];

const recommendedArticles = [
  {
    id: 1,
    title: "Ancaman Dari Weda Bay ? Bahaya Tak Terlihat di Maluku Utara",
    date: "Juli, 23 2025",
    image: "/img/hero2.jpg"
  },
  {
    id: 6,
    title: "Disana Panas Ekstrem, Disini Panas Hebat",
    date: "Juli, 14 2025",
    image: "/img/hero2.jpg"
  },
  {
    id: 8,
    title: "Mengenal Energi Terbarukan",
    date: "Juni 30 2025",
    image: "/img/hero3.jpg"
  },
  {
    id: 9,
    title: "Menanam Kesadaran, Merawat Masa Depan",
    date: "Juni, 16 2025",
    image: "/img/about1.png"
  },
  {
    id: 10,
    title: "Raja Ampat, Tambang Nikel, dan Kenapa Kita Harus Peduli?",
    date: "Juni, 20 2025",
    image: "/img/hero1.jpg"
  },
  {
    id: 3,
    title: "\"Save Our World\" Ketika Musik Jadi Seruan untuk Menjaga Bumi",
    date: "Juli, 8 2025",
    image: "/img/about.png"
  }
];

export default function PolusiPlastikArticlePage() {
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
