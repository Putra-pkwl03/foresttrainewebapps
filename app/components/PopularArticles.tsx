import ArticleCard from './ArticleCard';

const popularArticles = [
  {
    id: 1,
    title: "Ancaman Dari Weda Bay ? Bahaya Tak Terlihat di Maluku Utara",
    description: "Pulau Halmahera, Maluku Utara, dikenal sebagai rumah bagi kekayaan laut dan hutan yang menakjubkan.",
    date: "Juli, 23 2025",
    image: "/img/hero2.jpg",
    slug: "ancaman-dari-weda-bay",
    isLarge: true
  },
  {
    id: 2,
    title: "Fast Fashion VS Sustainable Fashion Pilihan style-mu, menentukan masa depan bumi!",
    date: "Agustus, 12 2025",
    image: "/img/hero3.jpg",
    slug: "fast-fashion-vs-sustainable-fashion",
    isLarge: false
  },
  {
    id: 3,
    title: "\"Save Our World\" Ketika Musik Jadi Seruan untuk Menjaga Bumi",
    date: "Juli, 8 2025",
    image: "/img/about.png",
    slug: "save-our-world-musik-seruan-menjaga-bumi",
    isLarge: false
  },
  {
    id: 4,
    title: "Gimana Perang Bikin Lingkungan Makin Menderita?",
    date: "Juni, 27 2025",
    image: "/img/about1.png",
    slug: "perang-bikin-lingkungan-menderita",
    isLarge: false
  }
];

export default function PopularArticles() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-10">
        Artikel Populer
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8">
        {/* Large Article - Left Side */}
        <div>
          <ArticleCard 
            article={popularArticles[0]} 
            isLarge={true}
            showDescription={true}
          />
        </div>
        
        {/* Small Articles - Right Side */}
        <div className="flex flex-col gap-6">
          {popularArticles.slice(1).map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              isLarge={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}