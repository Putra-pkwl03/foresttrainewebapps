interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="w-full max-w-sm">
      <h3 className="text-xl font-bold text-black mb-6">
        Artikel Relasi
      </h3>
      
      <div className="space-y-6">
        {articles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            {/* Image */}
            <div className="w-full h-32 mb-3 relative overflow-hidden rounded-md">
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
              
              <h4 className="text-sm font-bold text-black leading-snug group-hover:text-green-700 transition-colors">
                {article.title}
              </h4>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
