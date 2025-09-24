import Image from "next/image";

interface Props {
  image: string;
  title: string;
  location: string;
  desc: string;
}

export default function DestinationCard({ image, title, location, desc }: Props) {
  return (
   <div className="bg-white shadow-md rounded-[23px] border-3 border-[#265031] overflow-hidden flex flex-col">
  <div className="p-6"> 
    <Image
      src={image}
      alt={title}
      width={400}
      height={250}
      className="w-full h-48 object-cover rounded-md" 
    />
  </div>
  <div className="p-6 pt-1 flex flex-col flex-1">
    <h3 className="font-semibold text-[28px] text-black">{title}</h3>
    <p className="text-sm text-gray-600">{location}</p>
    <p className="mt-2 text-gray-700 mb-4">{desc}</p>
    <button className="mt-auto text-[14px] bg-[#265031] text-white py-2 px-6 rounded-full self-start">
      Lihat Selengkapnya
    </button>
  </div>
</div>


  );
}
