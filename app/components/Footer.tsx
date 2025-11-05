import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-green-100 to-[#4a7c59] pt-16 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex-shrink-0"></div>
            <span className="text-white font-bold text-2xl">Logo</span>
          </div>

          {/* Foresttraine Section */}
          <div>
            <h3 className="text-white font-bold text-xl mb-3">Foresttraine</h3>
            <p className="text-white text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Hubungi Kami Section */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Hubungi Kami</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-white hover:text-green-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-green-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-green-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}