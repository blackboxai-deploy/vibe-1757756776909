'use client'

export default function Features() {
  const features = [
    {
      title: "Anında Paylaşım",
      description: "Fotoğraflarınızı, videolarınızı ve düşüncelerinizi anında arkadaşlarınızla paylaşın.",
      gradient: "from-rose-400 to-pink-400",
      delay: "0s"
    },
    {
      title: "Güvenli Mesajlaşma",
      description: "End-to-end şifreli mesajlaşma ile özel konuşmalarınızı güvende tutun.",
      gradient: "from-pink-400 to-rose-500",
      delay: "0.2s"
    },
    {
      title: "Topluluk Oluşturma",
      description: "İlgi alanlarınıza göre topluluklar oluşturun ve benzer düşüncelilerle buluşun.",
      gradient: "from-rose-500 to-pink-500",
      delay: "0.4s"
    },
    {
      title: "Canlı Yayın",
      description: "Arkadaşlarınızla canlı yayın yapın, deneyimlerinizi gerçek zamanlı olarak paylaşın.",
      gradient: "from-pink-500 to-rose-400",
      delay: "0.6s"
    },
    {
      title: "Akıllı Keşif",
      description: "AI destekli algoritma ile ilginizi çekecek içerikleri ve insanları keşfedin.",
      gradient: "from-rose-400 to-pink-600",
      delay: "0.8s"
    },
    {
      title: "Hikaye Paylaşımı",
      description: "24 saat süreyle görünen hikayelerle günlük anlarınızı arkadaşlarınızla paylaşın.",
      gradient: "from-pink-600 to-rose-400",
      delay: "1s"
    }
  ]

  return (
    <section id="ozellikler" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Güçlü Özellikler
            </span>
            <br />
            <span className="text-gray-800">Sınırsız İmkanlar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modern sosyal ağ deneyimi için tasarlanmış özelliklerle bağlantılarınızı güçlendirin 
            ve dijital yaşamınızı zenginleştirin.
          </p>
        </div>

        {/* Özellikler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: feature.delay }}
            >
              {/* Dekoratif Üst Öğe */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
              </div>

              {/* İçerik */}
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>

              {/* Hover Efekti için Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              
              {/* Alt Öğe Dekorasyonu */}
              <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-rose-200 to-pink-200 opacity-0 group-hover:opacity-50 transition-all duration-300 transform group-hover:scale-150"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-8 lg:p-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-white mb-4">
              Tüm Özellikleri Ücretsiz Deneyimleyin
            </h3>
            <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
              Hemen kayıt olun ve sosyal ağın geleceğini bugünden yaşamaya başlayın. 
              Kredi kartı gerekmez, anında başlayabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-rose-200">
                Hemen Başlayın
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200">
                Demo İzle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}