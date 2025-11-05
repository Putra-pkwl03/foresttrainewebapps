"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 mr-8">
          <Image
            src="/img/logo.jpg"
            alt="Foresttraine Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full flex-shrink-0"
            priority
          />
          <span className="text-xl font-semibold text-gray-800 whitespace-nowrap">Foresttraine</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex items-center space-x-8 text-gray-600 text-[15px]">
            <li>
              <Link href="#" className="hover:text-gray-900 transition whitespace-nowrap">
                Tentang Foresttraine
              </Link>
            </li>
            <li>
              <Link href="/katalog" className="hover:text-gray-900 transition whitespace-nowrap">
                Katalog Destinasi
              </Link>
            </li>
            <li>
              <Link href="/kegiatan" className="hover:text-gray-900 transition whitespace-nowrap">
                Kegiatan Kami
              </Link>
            </li>
            <li>
              <Link href="/artikel" className="hover:text-gray-900 transition whitespace-nowrap">
                Artikel Foresttraine
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900 transition whitespace-nowrap">
                Hubungi Kami
              </Link>
            </li>
          </ul>

          {/* Button Masuk */}
          <button className="bg-[#1a6b3a] hover:bg-green-900 text-white px-6 py-2.5 text-[15px] font-medium transition rounded-md whitespace-nowrap">
            Masuk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-600 hover:text-gray-900 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-1 py-4 px-4 text-gray-600 text-sm">
            <li>
              <Link
                href="#"
                className="block py-3 px-4 hover:bg-gray-50 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Tentang Foresttraine
              </Link>
            </li>
            <li>
              <Link
                href="/katalog"
                className="block py-3 px-4 hover:bg-gray-50 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Katalog Destinasi
              </Link>
            </li>
            <li>
              <Link
                href="/kegiatan"
                className="block py-3 px-4 hover:bg-gray-50 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Kegiatan Kami
              </Link>
            </li>
            <li>
              <Link
                href="/artikel"
                className="block py-3 px-4 hover:bg-gray-50 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Artikel Foresttraine
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-3 px-4 hover:bg-gray-50 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </Link>
            </li>
            <li className="pt-2">
              <button className="w-full bg-green-800 hover:bg-green-900 text-white px-5 py-2.5 text-sm font-medium transition rounded">
                Masuk
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}