import ArticleCard from './ArticleCard';

const latestArticles = [
  {
    id: 5,
    title: "Dampak Nyata Polusi Plastik: Dari Merusak Alam Sampai Masuk Ke Makanan Kita",
    description: "Setiap menit 1 truk sampah plastik dibuang ke laut. Kalau dibiarkan di tahun 2050 jumlah plastik dilaut bisa lebih banyak daripada jumlah ikan.",
    date: "Juli, 29 2025",
    image: "/img/hero1.jpg"
  },
  {
    id: 6,
    title: "Disana Panas Ekstrem, Disini Panas Hebat",
    description: "Beberapa minggu terakhir Eropa dihantam gelombang panas yang diperparah dengan perubahan iklim hingga membuat suhu udara meningkat drastis.",
    date: "Juli, 14 2025",
    image: "/img/hero2.jpg"
  },
  {
    id: 7,
    title: "Tidak Semua Botol Plastik Bisa Didaur Ulang Lho!",
    description: "Dibalik setiap kemasan plastik ada angka kecil yang menunjukkan jenis plastiknya. Namun cuma sebagian jenis plastik yang bisa didaur ulang.",
    date: "Juli, 10 2025",
    image: "/img/about.png"
  },
  {
    id: 8,
    title: "Mengenal Energi Terbarukan",
    description: "Ditengah krisis iklim dan krisis energi, dunia butuh jalan keluar yang berkelanjutan. Dan jawabannya mungkin sudah lama kita kenal.",
    date: "Juni 30 2025",
    image: "/img/hero3.jpg"
  },
  {
    id: 9,
    title: "Menanam Kesadaran, Merawat Masa Depan",
    description: "Pernahkah kamu berpikir kalau ternyata perubahan besar itu nggak selalu harus dimulai dengan gerakan yang besar?",
    date: "Juni, 16 2025",
    image: "/img/about1.png"
  },
  {
    id: 10,
    title: "Raja Ampat, Tambang Nikel, dan Kenapa Kita Harus Peduli?",
    description: "Raja Ampat bukan sekedar destinasi wisata yang indah, ia adalah rumah bagi lebih dari 75% spesies terumbu karang dunia.",
    date: "Juni, 20 2025",
    image: "/img/hero1.jpg"
  }
];

export default function LatestArticles() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
        Artikel Terbaru
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {latestArticles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            isLarge={false}
            showDescription={true}
          />
        ))}
      </div>
    </section>
  );
}
