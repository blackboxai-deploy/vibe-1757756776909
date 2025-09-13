import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'SocialConnect - Bağlantılarınızı Güçlendirin',
  description: 'Modern sosyal ağ platformu ile arkadaşlarınızla bağlantı kurun, içerik paylaşın ve topluluklar oluşturun.',
  keywords: 'sosyal ağ, bağlantı, arkadaş, paylaşım, topluluk',
  authors: [{ name: 'SocialConnect Team' }],
  openGraph: {
    title: 'SocialConnect - Bağlantılarınızı Güçlendirin',
    description: 'Modern sosyal ağ platformu ile arkadaşlarınızla bağlantı kurun, içerik paylaşın ve topluluklar oluşturun.',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SocialConnect - Bağlantılarınızı Güçlendirin',
    description: 'Modern sosyal ağ platformu ile arkadaşlarınızla bağlantı kurun, içerik paylaşın ve topluluklar oluşturun.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fb7185" />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 text-gray-800`}>
        {children}
      </body>
    </html>
  )
}