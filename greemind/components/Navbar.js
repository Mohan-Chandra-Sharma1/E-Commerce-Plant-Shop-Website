"use client"
import Link from 'next/link'
import { ShoppingCart, User, Menu } from 'lucide-react'
import { useCart } from './CartContext'

export default function Navbar() {
  const { count } = useCart()
  return (
    <header className="bg-transparent text-black">
      <div className="container-max h-16 grid grid-cols-3 items-center">
        <div className="text-xl font-semibold tracking-wider">GREEMIND</div>
        <nav className="hidden md:flex items-center justify-center gap-10">
          <Link href="#" className="font-medium">Home</Link>
          <Link href="#products" className="opacity-80 hover:opacity-100">Products</Link>
          <Link href="#contacts" className="opacity-80 hover:opacity-100">Contacts</Link>
        </nav>
        <div className="justify-self-end flex items-center gap-4">
          <button aria-label="Cart" className="relative p-2">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue text-white text-[10px] leading-none rounded-full px-1.5 py-0.5">{count}</span>
            )}
          </button>
          <button aria-label="Account" className="p-2"><User size={20} /></button>
          <button aria-label="Menu" className="p-2"><Menu size={20} /></button>
        </div>
      </div>
    </header>
  )
}