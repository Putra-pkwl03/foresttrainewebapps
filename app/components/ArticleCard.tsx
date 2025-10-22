import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  description?: string;
  date: string;
  image: string;
  slug: string;
  isLarge?: boolean;
}

interface ArticleCardProps {
  article: Article;
  isLarge: boolean;
  showDescription?: boolean;
}

export default function ArticleCard({ article, isLarge, showDescription = false }: ArticleCardProps) {
  return (
    <Link href={`/artikel/${article.slug}`}>
      <article className={`group cursor-pointer ${
        isLarge ? 'h-full flex flex-col' : 'flex gap-4'
      }`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${
        isLarge 
          ? 'w-full h-[280px] md:h-[350px] flex-shrink-0' 
          : 'w-28 h-24 flex-shrink-0 rounded-md'
      }`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className={`${isLarge ? 'mt-4' : 'flex-1 flex flex-col justify-center'}`}>
        <p className="text-xs text-gray-500 mb-2">
          {article.date}
        </p>
        
        <h3 className={`font-bold text-black leading-snug group-hover:text-green-700 transition-colors ${
          isLarge ? 'text-xl md:text-2xl' : 'text-sm md:text-base'
        }`}>
          {article.title}
        </h3>
        
        {showDescription && article.description && isLarge && (
          <p className="text-gray-600 text-sm leading-relaxed mt-3">
            {article.description}
          </p>
        )}
      </div>
      </article>
    </Link>
  );
}