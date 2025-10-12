'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function ArticleHero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative h-[400px] md:h-[450px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/hero1.jpg')"
        }}
      />
      
      {/* Gradient Overlay - lebih gelap di kiri, transparan di kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Jelajah lebih banyak artikel dari foresttraine
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex max-w-md">
            <div className="flex-1 bg-white rounded-l-full flex items-center pl-5 pr-3 py-3.5">
              <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-5 md:px-7 py-3.5 bg-orange-500 text-white font-medium rounded-r-full hover:bg-orange-600 transition-colors text-sm flex items-center gap-1"
            >
              Search
              <span className="text-base">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}