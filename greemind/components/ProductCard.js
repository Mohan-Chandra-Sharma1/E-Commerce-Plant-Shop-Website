"use client"
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { useCart } from './CartContext'

export default function ProductCard({ title, price, image, alt }) {
  const { add } = useCart()
  return (
    <div className="group card-base">
      <div className="relative h-[240px] md:h-[500px]">
        <Image src={image} alt={alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105 md:h-full" loading="lazy" />
        <button onClick={add} className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition bg-blue text-white rounded-full px-3 py-2 text-sm inline-flex items-center gap-2"><Plus size={16} />Add to cart</button>
      </div>
      <div className="p-4">
        <div className="font-medium text-navy">{title}</div>
        <div className="text-gray-600">₹ {price}</div>
      </div>
    </div>
  )
}