import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white py-14"
      style={{
        background: "linear-gradient(to bottom, #64A675 0%, #2F5B3E 50%, #1F3B29 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
       {/* Kiri: Logo */}
<div className="flex items-center justify-center md:justify-start h-full -mt-8">
  <img
    src="/img/logo.jpg"
    alt="Logo"
    className="w-18 h-18 rounded-full"
  />
</div>

        {/* Tengah: Deskripsi */}
        <div>
          <h3 className="text-[30px] font-semibold">Foresttraine</h3>
          <p className="text-sm mt-2 leading-relaxed text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Kanan: Hubungi Kami */}
        <div className="flex flex-col items-center md:items-end space-y-3 mb-6">
          <h3 className="text-[30px] font-semibold">Hubungi Kami</h3>
          <div className="flex space-x-8 text-2xl gap-10 mt-6">
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
