import Image from "next/image";

interface Props {
  image: string;
  title: string;
  location: string;
  desc: string;
}

export default function DestinationCard({ image, title, location, desc }: Props) {
  return (
 <div className="bg-white max-w-[360px] rounded-[23px] border-4 border-[#265031] overflow-hidden flex flex-col shadow-[6px_0_4px_rgba(0,0,0,0.25)] transition-shadow duration-300">
  <div className="p-6 flex justify-center"> 
  <div className="w-[100%]"> 
    <Image
      src={image}
      alt={title}
      width={300}
      height={250}
      className="w-full h-40 object-cover rounded-md mx-auto"
    />
  </div>
</div>
  <div className="p-6 pt-1 flex flex-col flex-1">
    <h3 className="font-semibold text-[28px] text-black">{title}</h3>
    <p className="text-sm text-gray-600">{location}</p>
    <p className="mt-2 text-gray-700 mb-4">{desc}</p>
    <button className="mt-auto text-[14px] bg-[#265031] hover:bg-[#377247] text-white py-2 px-6 rounded-full self-start cursor-pointer">
      Lihat Selengkapnya
    </button>
  </div>
</div>


  );
}
