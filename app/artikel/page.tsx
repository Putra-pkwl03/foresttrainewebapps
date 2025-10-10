import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleHero from "../components/ArticleHero";
import PopularArticles from "../components/PopularArticles";
import LatestArticles from "../components/LatestArticles";

export default function ArtikelPage() {
  return (
    <div>
      <Navbar />
      <ArticleHero />
      <PopularArticles />
      <LatestArticles />
      <Footer />
    </div>
  );
}
