"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/img/logo.jpg" 
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-[#2E5939]">Foresttraine</span>
        </div>
        {/* Menu*/}
        <div className="flex items-center space-x-6">
         <ul className="hidden md:flex space-x-6 text-[#265031] font-normal text-[16px]">
          <li><Link href="#">Tentang Foresttraine</Link></li>
          <li><Link href="#">Katalog Destinasi</Link></li>
          <li><Link href="#">Kegiatan Kami</Link></li>
          <li><Link href="#">Artikel Foresttraine</Link></li>
          <li><Link href="#">Hubungi Kami</Link></li>
        </ul>
          {/* Button */}
          <button className="bg-[#2E5939] text-white px-4 py-1">
            Masuk
          </button>
        </div>
      </div>
    </nav>
  );
}
