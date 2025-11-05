import Image from "next/image";

interface Props {
  image: string;
  title: string;
  location: string;
  desc: string;
}

export default function DestinationCard({ image, title, location, desc }: Props) {
  return (
    <div className="bg-white rounded-3xl border-4 border-[#265031] flex flex-col h-full overflow-hidden">
      {/* Image dengan padding dan rounded corners */}
      <div className="p-4 pb-0">
        <div className="w-full h-44 overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-black mb-1 leading-tight">{title}</h3>
        <p className="text-sm text-gray-700 mb-3">{location}</p>
        <p className="text-sm text-gray-800 mb-5 flex-1 leading-relaxed">{desc}</p>
        <button 
          className="mt-auto text-sm bg-[#265031] hover:bg-[#1f3f27] font-semibold py-2.5 px-5 rounded-3xl self-start cursor-pointer transition-colors"
          style={{ color: '#ffffff' }}
        >
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
}