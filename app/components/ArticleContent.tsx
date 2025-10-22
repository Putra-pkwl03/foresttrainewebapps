interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-800 leading-relaxed space-y-6">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
