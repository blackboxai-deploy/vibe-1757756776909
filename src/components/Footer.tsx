'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Hakkımızda', href: '#' },
      { name: 'Kariyer', href: '#' },
      { name: 'Basın', href: '#' },
      { name: 'Haberler', href: '#' }
    ],
    product: [
      { name: 'Özellikler', href: '#ozellikler' },
      { name: 'Güvenlik', href: '#' },
      { name: 'Mobil App', href: '#' },
      { name: 'Desktop App', href: '#' }
    ],
    support: [
      { name: 'Yardım Merkezi', href: '#' },
      { name: 'İletişim', href: '#iletisim' },
      { name: 'Durum Sayfası', href: '#' },
      { name: 'API Dokümanları', href: '#' }
    ],
    legal: [
      { name: 'Gizlilik Politikası', href: '#' },
      { name: 'Kullanım Koşulları', href: '#' },
      { name: 'Çerez Politikası', href: '#' },
      { name: 'KVKK', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', gradient: 'from-blue-400 to-blue-600' },
    { name: 'Facebook', href: '#', gradient: 'from-blue-600 to-blue-800' },
    { name: 'Instagram', href: '#', gradient: 'from-pink-400 to-rose-600' },
    { name: 'LinkedIn', href: '#', gradient: 'from-blue-500 to-blue-700' },
    { name: 'YouTube', href: '#', gradient: 'from-red-500 to-red-700' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Ana Footer İçeriği */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-poppins">S</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold font-poppins bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  SocialConnect
                </h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Bağlantılarınızı güçlendiren, anılarınızı paylaştığınız ve yeni topluluklarla 
              buluştuğunuz modern sosyal ağ platformu.
            </p>
            
            {/* Email Subscription */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-rose-300">Güncellemelerden Haberdar Olun</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-white placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-r-lg font-medium transition-all duration-200 text-white">
                  Kayıt Ol
                </button>
              </div>
            </div>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="font-semibold font-poppins text-white mb-4">Şirket</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ürün */}
          <div>
            <h3 className="font-semibold font-poppins text-white mb-4">Ürün</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h3 className="font-semibold font-poppins text-white mb-4">Destek</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h3 className="font-semibold font-poppins text-white mb-4">Yasal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sosyal Medya ve App Store Linkleri */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Sosyal Medya */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-center lg:text-left text-rose-300">Bizi Takip Edin</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center text-white hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl`}
                    aria-label={social.name}
                  >
                    <div className="w-5 h-5 bg-white rounded opacity-90"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* App Store Linkleri */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-center lg:text-right text-rose-300">Mobil Uygulamayı İndirin</h4>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="bg-gray-800 rounded-lg px-6 py-3 border border-gray-700 hover:border-rose-400 transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <div className="text-xs text-gray-400">İndir</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg px-6 py-3 border border-gray-700 hover:border-rose-400 transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <div className="text-xs text-gray-400">İndir</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Copyright */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} SocialConnect. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Türkiye'de ❤️ ile yapıldı</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-rose-400 transition-colors duration-200">Türkçe</a>
                <a href="#" className="hover:text-rose-400 transition-colors duration-200">English</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}