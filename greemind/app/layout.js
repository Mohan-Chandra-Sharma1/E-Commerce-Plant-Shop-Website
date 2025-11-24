import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { CartProvider } from '../components/CartContext'

export const metadata = {
  title: 'GREEMIND | Buy your dream plants',
  description: 'Plant shop landing page with best selling plants, categories, and testimonials.',
  metadataBase: new URL('https://greemind.example.com'),
  openGraph: {
    title: 'GREEMIND',
    description: 'Buy your dream plants',
    url: 'https://greemind.example.com',
    siteName: 'GREEMIND',
    images: [
      {
        url: '/images/hero-plant.webp',
        width: 1200,
        height: 630,
        alt: 'Greemind hero plant'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GREEMIND',
    description: 'Buy your dream plants',
    images: ['/images/hero-plant.webp']
  }
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quella&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}