import { Inter } from 'next/font/google'
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}