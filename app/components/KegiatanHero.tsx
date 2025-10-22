export default function KegiatanHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/hero1.jpg')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
          Kegiatan Kami
        </h1>
        
        <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
          Setiap kegiatan yang kami lakukan adalah bagian dari perjalanan kami bersama Anda. 
          Melalui galeri ini, kami ingin berbagi momen penting yang mencerminkan dedikasi, 
          semangat, dan nilai yang dipegang Foresttraine.
        </p>
      </div>
    </section>
  );
}
