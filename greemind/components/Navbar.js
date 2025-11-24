"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from './CartContext'
import CartDrawer from './CartDrawer'
import AuthModal from './AuthModal'
import NavMenu from './NavMenu'

export default function Navbar() {
  const { count } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-transparent text-black relative z-40">
        <div className="container-max h-16 grid grid-cols-3 items-center">
          <div className="flex items-center">
            <Image src="/images/GREENMIND.webp" alt="GREENMIND" width={150} height={40} className="object-contain" />
          </div>
          <nav className="hidden md:flex items-center justify-center gap-10">
            <Link href="#products" className="opacity-60 hover:opacity-100 font-poppins font-medium text-[18px] leading-[100%] tracking-[0%]">Home</Link>
            <Link href="#products" className="opacity-60 hover:opacity-100 font-poppins font-medium text-[18px] leading-[100%] tracking-[0%]">Products</Link>
            <Link href="#contacts" className="opacity-60 hover:opacity-100 font-poppins font-medium text-[18px] leading-[100%] tracking-[0%]">Contacts</Link>
          </nav>
          <div className="justify-self-end flex items-center gap-8">
            <button
              aria-label="Cart"
              className="relative p-2 hover:bg-black/5 rounded-full transition"
              onClick={() => setIsCartOpen(true)}
            >
              <Image src="/images/Cart.webp" alt="Cart" width={24} height={24} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue text-white text-[10px] leading-none rounded-full px-1.5 py-0.5">{count}</span>
              )}
            </button>
            <button
              aria-label="Account"
              className="p-2 hover:bg-black/5 rounded-full transition"
              onClick={() => setIsAuthOpen(true)}
            >
              <Image src="/images/Person.webp" alt="Account" width={24} height={24} />
            </button>
            <span className="h-5 w-[3px] bg-[#1E1E1E] self-center border-r-[2px] border-color-black-900"></span>
            <button
              aria-label="Menu"
              className="p-2 hover:bg-black/5 rounded-full transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image src="/images/FilterRight.webp" alt="Menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}