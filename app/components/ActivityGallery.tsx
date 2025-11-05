interface ActivityImage {
  id: number;
  src: string;
  alt: string;
  className: string;
}

const activityImages: ActivityImage[] = [
  {
    id: 1,
    src: "/img/hero1.jpg",
    alt: "Kegiatan pembersihan hutan",
    className: "col-span-1 row-span-2 h-full"
  },
  {
    id: 2,
    src: "/img/hero2.jpg",
    alt: "Sortir sampah di hutan",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 3,
    src: "/img/hero3.jpg",
    alt: "Kegiatan di greenhouse",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 4,
    src: "/img/about.png",
    alt: "Pengumpulan sampah di hutan",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 5,
    src: "/img/about1.png",
    alt: "Penanaman pohon",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 6,
    src: "/img/lumbungstroberi.png",
    alt: "Observasi alam",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 7,
    src: "/img/perkebunanapel.png",
    alt: "Kegiatan di hutan",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 8,
    src: "/img/perkebunanherbal.png",
    alt: "Pemotongan rumput",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 9,
    src: "/img/peternakansapi.png",
    alt: "Kegiatan di alam",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 10,
    src: "/img/hero1.jpg",
    alt: "Dokumentasi kegiatan",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 11,
    src: "/img/hero2.jpg",
    alt: "Diskusi tim di hutan",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 12,
    src: "/img/hero3.jpg",
    alt: "Penyiraman tanaman",
    className: "col-span-1 row-span-1 h-48"
  },
  {
    id: 13,
    src: "/img/about.png",
    alt: "Kegiatan penanaman",
    className: "col-span-1 row-span-1 h-48"
  }
];

export default function ActivityGallery() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {/* Large image - spans 2 rows and 2 columns */}
      <div className="col-span-2 row-span-2">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[300px] md:min-h-[400px]">
          <img
            src={activityImages[0].src}
            alt={activityImages[0].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      {/* Small images in the first two rows */}
      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[1].src}
            alt={activityImages[1].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[2].src}
            alt={activityImages[2].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[3].src}
            alt={activityImages[3].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[4].src}
            alt={activityImages[4].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      {/* Row 3 - Regular images */}
      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[5].src}
            alt={activityImages[5].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[6].src}
            alt={activityImages[6].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[7].src}
            alt={activityImages[7].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[8].src}
            alt={activityImages[8].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      {/* Row 4 - More regular images */}
      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[9].src}
            alt={activityImages[9].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      {/* Large horizontal image - spans 2 columns */}
      <div className="col-span-2 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[10].src}
            alt={activityImages[10].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[11].src}
            alt={activityImages[11].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      {/* Bottom row */}
      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[12].src}
            alt={activityImages[12].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-full min-h-[145px] md:min-h-[195px]">
          <img
            src={activityImages[0].src}
            alt={activityImages[0].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>
    </div>
  </section>
  );
}
