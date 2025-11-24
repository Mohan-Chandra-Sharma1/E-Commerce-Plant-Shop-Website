"use client"
import Image from 'next/image'
import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function TestimonialCard({ text, name, role, rating, avatar, className = '' }) {
  return (
    <div className={`rounded-2xl shadow-card p-8 w-[70vw] mx-auto ${className || 'bg-white'}`}>
      <p className="text-gray-700 leading-relaxed">{text}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-0">
          <div className="relative w-52 h-52 rounded-full overflow-hidden">
            <Image src={avatar} alt={`${name} avatar`} fill sizes="200px" loading="lazy" className="object-cover" />
          </div>
          <div>
            <div className="font-poppins font-bold text-[18px] leading-none text-[#1E1E1E]">{name}</div>
            <div className="text-gray-500 text-sm">{role}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-navy"><Star className="fill-yellow-400 text-yellow-400" size={18} />{rating}</div>
      </div>
    </div>
  )
}

export function TestimonialsCarousel({ items = [], interval = 4000, index: controlledIndex, onIndexChange }) {
  const [internalIndex, setInternalIndex] = useState(0)
  const index = controlledIndex ?? internalIndex
  const setIndex = onIndexChange ?? setInternalIndex
  useEffect(() => {
    if (!items.length) return
    const id = setInterval(() => setIndex(prev => (prev + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval])
  return (
    <section aria-label="Testimonials" className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((it, i) => (
            <div key={i} className="w-[80vw] shrink-0 px-4">
              <TestimonialCard {...it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsIndicators({ items = [], index = 0, setIndex = () => { } }) {
  return (
    <div className="flex items-center gap-3" aria-label="Slide indicators">
      {items.map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => setIndex(i)}
          className={`h-1 rounded-full ${index === i ? 'bg-navy w-8' : 'bg-gray-300 w-5'}`}
        />
      ))}
    </div>
  )
}