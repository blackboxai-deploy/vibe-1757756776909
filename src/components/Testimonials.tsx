'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ayşe Demir",
      role: "İçerik Üreticisi",
      content: "SocialConnect sayesinde içeriklerimi daha geniş kitlelere ulaştırabiliyorum. Platform gerçekten kullanıcı dostu ve özellikleri harika!",
      rating: 5,
      gradient: "from-rose-400 to-pink-400"
    },
    {
      name: "Mehmet Kaya",
      role: "Girişimci",
      content: "İşim için oluşturduğum topluluk 1 ayda 10.000 üyeye ulaştı. SocialConnect'in algoritması gerçekten etkili çalışıyor.",
      rating: 5,
      gradient: "from-pink-400 to-rose-500"
    },
    {
      name: "Zeynep Öztürk",
      role: "Öğrenci",
      content: "Üniversitede benzer ilgi alanlarına sahip arkadaşlar buldum. Güvenli mesajlaşma özelliği de çok güven veriyor.",
      rating: 5,
      gradient: "from-rose-500 to-pink-500"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        className={`w-5 h-5 rounded-sm ${
          index < rating 
            ? 'bg-gradient-to-r from-rose-400 to-pink-400' 
            : 'bg-gray-200'
        }`}
      ></div>
    ))
  }

  return (
    <section id="yorumlar" className="py-16 lg:py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Kullanıcılarımız
            </span>
            <br />
            <span className="text-gray-800">Ne Diyor?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Binlerce memnun kullanıcımızdan sadece birkaçının deneyimlerini keşfedin ve 
            SocialConnect'in hayatlarına kattığı değeri görün.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100 relative overflow-hidden group"
            >
              {/* Dekoratif Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Yıldızlar */}
              <div className="flex space-x-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Yorum Metni */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                <div className={`absolute -top-4 -left-2 text-6xl bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent opacity-20 font-serif leading-none`}>
                  "
                </div>
                {testimonial.content}
                <div className={`absolute -bottom-6 -right-2 text-6xl bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent opacity-20 font-serif leading-none transform rotate-180`}>
                  "
                </div>
              </blockquote>

              {/* Kullanıcı Bilgileri */}
              <div className="flex items-center relative z-10">
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13e4a59b-b3c7-4f4c-a51d-ec4ffb7d426d.png' ').map(n => n[0]).join('')}+Profil+Fotoğrafı+Gülümseyen+Kişi+Profesyonel`}
                    alt={`${testimonial.name} - Profil Fotoğrafı Gülümseyen Kişi Profesyonel`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-200 shadow-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,' + encodeURIComponent(`
                        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="avatar${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style="stop-color:#fb7185"/>
                              <stop offset="100%" style="stop-color:#ec4899"/>
                            </linearGradient>
                          </defs>
                          <circle cx="30" cy="30" r="30" fill="url(#avatar${index})"/>
                          <circle cx="30" cy="23" r="8" fill="white" opacity="0.9"/>
                          <path d="M15 45 C15 35, 20 30, 30 30 C40 30, 45 35, 45 45" fill="white" opacity="0.9"/>
                        </svg>
                      `);
                    }}
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${testimonial.gradient} rounded-full border-2 border-white`}></div>
                </div>

                {/* İsim ve Rol */}
                <div className="ml-4">
                  <h4 className="font-semibold font-poppins text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Dekoratif Alt Öğe */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-all duration-300 transform group-hover:scale-150`}></div>
            </div>
          ))}
        </div>

        {/* İstatistikler */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-rose-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold font-poppins bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <p className="text-gray-600">Ortalama Puan</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold font-poppins bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-600">Mutlu Kullanıcı</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold font-poppins bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <p className="text-gray-600">Uptime Oranı</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold font-poppins bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-gray-600">Destek Hizmeti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}