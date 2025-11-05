import SectionHeader from "./SectionHeader";
import ArticleCard from "./ArticleCard1";

export default function ArticlesSection() {
  const articles = [
    {
      image: "/img/ar1.png",
      date: "29 Juli 2025",
      title: "Dampak Nyata Polusi Plastik",
      excerpt:
        "Plastik itu emang praktis, murah, dan mudah. Tapi dibalik itu, ada bahaya yang jarang kita sadari, lho! Bukan cuma mencemari lingkungan, plastik juga bisa masuk ke tubuh kita lewat makanan, air minum, bahkan garam yang kita pakai sehari-hari.",
    },
    {
      image: "/img/ar2.png",
      date: "14 Juli 2025",
      title: "Di Sana Panas Ekstrem, Di Sini Banjir Hebat",
      excerpt:
        "Di satu sisi, bumi dilanda gelombang panas mematikan. Di sisi lain, banjir besar saat seharusnya musim kering. Kita hidup di tengah krisis iklim. Yang makin dekat, makin mengkhawatirkan, dan makin berdampak.",
    },
    {
      image: "/img/ar3.png",
      date: "25 Juni 2025",
      title: "Seberapa Besar Jejak Karbonmu?",
      excerpt:
        "Pernah mikir nggak, seberapa besar jejak kamu di bumi? Dari nulis catatan, naik motor, sampai scroll TikTok, semua ninggalin jejak karbon. Tapi kabar baiknya… Kita bisa mulai dari satu perubahan kecil.",
    },
  ];
  return (
<section
  className="py-16"
  style={{
    background:
      "linear-gradient(to top,  #6BA17B 0%, #64A675 2%, #e9f2ec 18%, #f6f7f8 60%, #f9fafb 100%)",
  }}
>
      <div className="max-w-screen-xl mx-auto px-8">
        <SectionHeader
            title="Cerita & Wawasan Foresttraine"
            subtitle={`Artikel Foresttraine membawamu lebih dekat dengan bumi, dari pengetahuan hingga aksi nyata!`}
            buttonText="Lihat Artikel Lainnya"
        />

        <div className="grid md:grid-cols-3 gap-12 mt-10 justify-items-center">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
