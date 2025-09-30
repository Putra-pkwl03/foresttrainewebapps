"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50 flex flex-col md:flex-row items-center">
      {/* === Kolom Gambar === */}
      <div className="w-full md:w-[38%] flex justify-start relative ml-6">
        <svg width="0" height="0">
          <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
            <path d="M0.7,0 C1,0 1,0.4 1,0.7 C1,1 0.7,1 0.5,1 C0.2,1 0,0.8 0,0.5 C0,0.2 0.4,0 0.7,0 Z" />
          </clipPath>
        </svg>
        <div className="relative w-100 h-100 md:w-[440px] md:h-[460px]">
          <div
            className="absolute top-0 left-6 w-full h-full bg-[#d9d9d9]/40"
            style={{
              clipPath: "url(#blobClip)",
              transform: "scale(1.08) translateY(-5%) translateX(-4%)",
            }}
          />
          <div
            className="relative w-full h-full overflow-hidden shadow-lg"
            style={{
              clipPath: "url(#blobClip)",
            }}
          >
            <Image
              src="/img/about.png"
              alt="Tentang Foresttraine"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* === Kolom Konten === */}
      <div className="w-full md:w-[60%] md:pl-8 -mt-22">
        <h2 className="text-[32px] md:text-5xl font-bold text-[#265031] mb-6">
          Tentang Foresttraine
        </h2>
        <p className="text-[#265031] leading-relaxed mb-4 text-[18px]">
          Foresttraine adalah layanan edukasi dan wisata lingkungan yang mengajak Anda belajar langsung dari alam. Dari perkebunan hingga peternakan, kami membuka <br />
          pintu untuk memahami dan memanfaatkan lingkungan hidup secara bijak dan berkelanjutan.
            Kami percaya, perubahan besar dimulai dari langkah kecil pengetahuan yang tepat dan aksi nyata. Melalui program edukasi kami, setiap orang <br />
            bisa menjadi agen perubahan untuk masa depan bumi yang lebih hijau.
        </p>
        <p className="text-[#265031] font-semibold mb-6 text-[18px]">
          Bersama kita jaga, bersama kita belajar, bersama kita bergerak.
        </p>
        <button className="bg-[#265031] hover:bg-[#377247] text-white font-bold px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer text-[16px]">
          Lihat Selengkapnya
        </button>
      </div>
    </section>
  );
}
