interface ArticleDetailHeroProps {
  image: string;
  date: string;
  title: string;
  subtitle: string;
}

export default function ArticleDetailHero({ image, date, title, subtitle }: ArticleDetailHeroProps) {
  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Article Info */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <p className="text-sm text-gray-600 mb-4">
          {date}
        </p>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
          {title}
        </h1>
        
        <h2 className="text-xl md:text-2xl font-bold text-black leading-relaxed">
          {subtitle}
        </h2>
      </div>
    </section>
  );
}
