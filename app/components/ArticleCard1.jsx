export default function ArticleCard({ image, date, title, excerpt }) {
  return (
    <div className="bg-white shadow-md rounded-2xl hover:shadow-lg transition-shadow flex flex-col max-w-sm w-full">
      {/* Gambar */}
      <div className="px-4 pt-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>

      {/* Konten */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-gray-500 text-sm mb-1">{date}</p>
          <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-5">
            {excerpt}
          </p>
        </div>

        <button className="mt-3 text-green-800 font-semibold hover:underline self-start">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
}
