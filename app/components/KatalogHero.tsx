export default function KatalogHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center hero-section-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/perkebunanherbal.png')"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto text-center">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          style={{ color: '#ffffff' }}
        >
          Katalog Destinasi
        </h1>
      </div>
    </section>
  );
}
