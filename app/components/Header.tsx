'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-2xl fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-3xl font-black text-white transform hover:scale-105 transition-all duration-300">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-4xl animate-bounce">🚛</span>
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">PCS Transport</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-2">
          <Link href="#about" className="px-4 py-2 text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Despre Noi</Link>
          <Link href="#services" className="px-4 py-2 text-white font-semibold rounded-full hover:bg-white hover:text-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Servicii</Link>
          <Link href="#gallery" className="px-4 py-2 text-white font-semibold rounded-full hover:bg-white hover:text-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Galerie</Link>
          <Link href="#map" className="px-4 py-2 text-white font-semibold rounded-full hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Locație</Link>
          <Link href="#contact" className="px-4 py-2 text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Contact</Link>
        </nav>
        <button 
          className="md:hidden text-white hover:text-yellow-300 p-2 rounded-full hover:bg-white hover:bg-opacity-20 transform hover:scale-110 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-600 to-pink-500 border-t border-white border-opacity-20 backdrop-blur-sm">
          <nav className="px-6 py-4 space-y-3">
            <Link href="#about" className="block py-3 px-4 text-white font-semibold rounded-xl hover:bg-white hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>🎯 Despre Noi</Link>
            <Link href="#services" className="block py-3 px-4 text-white font-semibold rounded-xl hover:bg-white hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>💰 Servicii</Link>
            <Link href="#gallery" className="block py-3 px-4 text-white font-semibold rounded-xl hover:bg-white hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>📸 Galerie</Link>
            <Link href="#map" className="block py-3 px-4 text-white font-semibold rounded-xl hover:bg-white hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>📍 Locație</Link>
            <Link href="#contact" className="block py-3 px-4 text-white font-semibold rounded-xl hover:bg-white hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>💬 Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;