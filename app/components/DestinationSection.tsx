import DestinationCard from "./DestinationCard";

export default function DestinationSection() {
  const destinations = [
    {
      image: "/img/lumbungstroberi.png",
      title: "Lumbung Stroberi",
      location: "Pandarejo, Bumiaji, Kota Batu",
      desc: "Nikmati pengalaman memetik stroberi langsung dari kebunnya di Perkebunan Stroberi Pandanrejo, Kota Batu."
    },
    {
      image: "/img/perkebunanherbal.png",
      title: "Perkebunan Tanaman Herbal",
      location: "Desa Wisata Madiredo",
      desc: "Tempat yang sempurna untuk belajar tentang manfaat dan cara budidaya tanaman herbal."
    },
    {
      image: "/img/peternakansapi.png",
      title: "Peternakan Sapi Perah",
      location: "Desa Wisata Madiredo",
      desc: "Peternakan Sapi Perah memberikan kesempatan untuk belajar tentang industri susu yang berkelanjutan."
    },
    {
      image: "/img/perkebunanapel.png",
      title: "Perkebunan Apel",
      location: "Desa Wisata Madiredo",
      desc: "Perkebunan Apel adalah destinasi ideal untuk menikmati apel segar langsung dari pohonnya."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50">
      <h2 className="text-[50px] font-bold text-green-800 text-center mb-4">
        Temukan Destinasi Edukasi Lingkungan Hidup
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {destinations.map((d, i) => (
          <DestinationCard key={i} {...d} />
        ))}
      </div>
    </section>
  );
}
