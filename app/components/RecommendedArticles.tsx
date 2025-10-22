interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface RecommendedArticlesProps {
  articles: Article[];
}

export default function RecommendedArticles({ articles }: RecommendedArticlesProps) {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
          Artikel Rekomendasi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              {/* Image */}
              <div className="w-full h-40 mb-4 relative overflow-hidden rounded-md">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div>
                <p className="text-xs text-gray-500 mb-2">
                  {article.date}
                </p>
                
                <h3 className="text-base font-bold text-black leading-snug group-hover:text-green-700 transition-colors">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
