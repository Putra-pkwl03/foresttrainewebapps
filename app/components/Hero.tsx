"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/img/hero1.jpg", "/img/hero2.jpg", "/img/hero3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section
      className="relative h-[500px] text-white transition-all duration-700"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Siapa itu Foresttraine ?
        </h1>
        <p className="max-w-2xl mb-6">
          Foresttraine adalah layanan edukasi dan wisata yang bergerak di bidang pemanfaatan
          lingkungan hidup, mencakup perkebunan, pertanian, peternakan dan lingkungan hidup lainnya.
        </p>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
          Lihat Lebih Lanjut
        </button>
      </div>

      {/* Tombol Navigasi */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full text-white hover:bg-black/70"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full text-white hover:bg-black/70"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicator (dot) */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-yellow-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
<div className="absolute -bottom-4 left-0 right-0 h-32 pointer-events-none transform translate-y-22">
  <div
    className="w-full h-full"
    style={{
      background: `linear-gradient(
        to bottom,
        #425116 0%,
        #5e6c34 10%,
        #bfc7b0 60%,
        #d0d3c9 70%,
        #e6ebe6 85%,
        #f9fafb 100%
      )`,
    }}
  />
</div>

    </section>
  );
}
