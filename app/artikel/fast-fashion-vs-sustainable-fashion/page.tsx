import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleDetailHero from "../../components/ArticleDetailHero";
import ArticleContent from "../../components/ArticleContent";
import RelatedArticles from "../../components/RelatedArticles";
import RecommendedArticles from "../../components/RecommendedArticles";

// Data artikel tentang Fast Fashion
const articleData = {
  id: 2,
  title: "Fast Fashion VS Sustainable Fashion",
  subtitle: "Pilihan style-mu, menentukan masa depan bumi!",
  date: "Agustus, 12 2025",
  image: "/img/hero3.jpg",
  content: `Industri fashion adalah salah satu industri yang paling merusak lingkungan di dunia. Setiap tahun, industri ini menghasilkan 10% dari emisi karbon global dan menggunakan 93 miliar meter kubik air - cukup untuk memenuhi kebutuhan 5 juta orang.

Fast fashion telah mengubah cara kita berbelanja pakaian. Dengan harga yang sangat murah dan desain yang selalu berganti setiap minggu, kita cenderung membeli lebih banyak pakaian daripada yang kita butuhkan. Namun, dampak lingkungannya sangat besar.

Sustainable fashion menawarkan alternatif yang lebih ramah lingkungan. Dengan menggunakan bahan organik, proses produksi yang etis, dan desain yang timeless, sustainable fashion membantu mengurangi dampak negatif terhadap lingkungan sambil tetap memungkinkan kita untuk tampil stylish.`
};

const relatedArticles = [
  {
    id: 1,
    title: "Ancaman Dari Weda Bay ? Bahaya Tak Terlihat di Maluku Utara",
    date: "Juli, 23 2025",
    image: "/img/hero2.jpg"
  },
  {
    id: 7,
    title: "Tidak Semua Botol Plastik Bisa Didaur Ulang Lho!",
    date: "Juli, 10 2025",
    image: "/img/about.png"
  }
];

const recommendedArticles = [
  {
    id: 5,
    title: "Dampak Nyata Polusi Plastik: Dari Merusak Alam Sampai Masuk Ke Makanan Kita",
    date: "Juli, 29 2025",
    image: "/img/hero1.jpg"
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

export default function FastFashionArticlePage() {
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
