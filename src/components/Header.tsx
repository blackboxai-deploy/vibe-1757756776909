'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-poppins">S</span>
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold font-poppins bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                SocialConnect
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#ana-sayfa" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">
              Ana Sayfa
            </a>
            <a href="#ozellikler" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">
              Özellikler
            </a>
            <a href="#hakkimizda" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">
              Hakkımızda
            </a>
            <a href="#yorumlar" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">
              Yorumlar
            </a>
            <a href="#iletisim" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">
              İletişim
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-medium"
            >
              Giriş Yap
            </Button>
            <Button 
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 px-6 py-2 font-medium shadow-lg"
            >
              Kayıt Ol
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-rose-600 focus:outline-none focus:text-rose-600"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-rose-200 mt-2 pt-4 pb-6 bg-white/90 backdrop-blur-sm rounded-b-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#ana-sayfa" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium px-4 py-2">
                Ana Sayfa
              </a>
              <a href="#ozellikler" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium px-4 py-2">
                Özellikler
              </a>
              <a href="#hakkimizda" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium px-4 py-2">
                Hakkımızda
              </a>
              <a href="#yorumlar" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium px-4 py-2">
                Yorumlar
              </a>
              <a href="#iletisim" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium px-4 py-2">
                İletişim
              </a>
              <div className="flex flex-col space-y-3 px-4 mt-4">
                <Button 
                  variant="outline" 
                  className="text-rose-600 border-rose-300 hover:bg-rose-50 font-medium w-full"
                >
                  Giriş Yap
                </Button>
                <Button 
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 font-medium shadow-lg w-full"
                >
                  Kayıt Ol
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}