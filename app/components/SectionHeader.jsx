export default function SectionHeader({ title, subtitle, buttonText }) {
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Kiri: Judul */}
        <div>
          <h2 className="text-[32px] md:text-5xl font-bold text-[#265031] leading-tight">
            Cerita & Wawasan <br />
            <span className="block">Foresttraine</span>
          </h2>
        </div>

        {/* Kanan: Tombol + Subtitle di bawahnya */}
        <div className="mt-4 md:mt-0 text-right">
          <button className="bg-[#265031] hover:bg-[#377247] text-white font-bold text-[16px] px-6 py-3 rounded-lg transition duration-300 cursor-pointer shadow">
            {buttonText}
          </button>
          <p
            className="text-gray-600 mt-2 ml-auto text-right leading-snug max-w-[650px]"
            dangerouslySetInnerHTML={{
              __html: subtitle,
            }}
          />
        </div>
      </div>
    </div>
  );
}
