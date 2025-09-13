'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="ana-sayfa" className="pt-20 pb-16 lg:pb-24 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Sol Taraf - İçerik */}
          <div className="mb-12 lg:mb-0">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">
                  Bağlantılarınızı
                </span>
                <br />
                <span className="text-gray-800">
                  Güçlendirin
                </span>
              </h1>
              
              <p className="mt-6 text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Modern sosyal ağ platformu ile arkadaşlarınızla bağlantı kurun, 
                anılarınızı paylaşın ve yeni topluluklar keşfedin.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl transform transition-transform duration-200 hover:scale-105"
                >
                  Ücretsiz Başlayın
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg font-semibold transition-all duration-200"
                >
                  Daha Fazla Bilgi
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <div className="text-3xl font-bold font-poppins text-rose-600">10M+</div>
                  <div className="text-gray-600 text-sm mt-1">Aktif Kullanıcı</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-poppins text-rose-600">50M+</div>
                  <div className="text-gray-600 text-sm mt-1">Günlük Paylaşım</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-poppins text-rose-600">100K+</div>
                  <div className="text-gray-600 text-sm mt-1">Topluluk</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Görsel */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9666e17-84ea-4962-89ed-25676895544e.png"
                alt="Modern sosyal medya uygulaması arayüzü mobil telefon ekranında açık pembe tema ile kullanıcı profilleri ve paylaşımlar"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,' + encodeURIComponent(`
                    <svg width="600" height="700" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#fdf2f8"/>
                          <stop offset="100%" style="stop-color:#fce7f3"/>
                        </linearGradient>
                      </defs>
                      <rect width="600" height="700" fill="url(#bg)"/>
                      <circle cx="300" cy="200" r="60" fill="#fb7185" opacity="0.8"/>
                      <rect x="200" y="300" width="200" height="20" fill="#f43f5e" rx="10"/>
                      <rect x="150" y="350" width="300" height="15" fill="#ec4899" rx="7"/>
                      <rect x="180" y="390" width="240" height="15" fill="#db2777" rx="7"/>
                      <circle cx="150" cy="500" r="30" fill="#be185d" opacity="0.6"/>
                      <circle cx="450" cy="520" r="25" fill="#a21caf" opacity="0.6"/>
                      <rect x="200" y="480" width="150" height="10" fill="#831843" rx="5"/>
                      <rect x="200" y="510" width="180" height="10" fill="#7c2d12" rx="5"/>
                    </svg>
                  `);
                }}
              />
            </div>

            {/* Dekoratif Öğeler */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-rose-200">
          <p className="text-center text-gray-500 text-sm mb-8">Güvendiğiniz markalar tarafından kullanılıyor</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[1,2,3,4,5].map((index) => (
              <div key={index} className="w-24 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <div className="w-16 h-6 bg-gray-400 rounded opacity-40"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}