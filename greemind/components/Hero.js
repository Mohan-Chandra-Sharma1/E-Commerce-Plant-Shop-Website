"use client"
import Image from 'next/image'
import { Search } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container-max mt-10">
      <div className="relative rounded-hero bg-[#e0f2f1] p-6 sm:p-10 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <h1 className="heading-hero w-full max-w-[400px]">Buy your dream plants</h1>
            <div className="flex items-start gap-6 text-navy">
              <div className="space-y-1">
                <div className="text-[28px] font-bold">50+</div>
                <div className="text-md text-black-700">Plant Species</div>
              </div>
              <span className="h-10 w-[2px] bg-gray-300 self-center border-r-[2px] border-color-black-300"></span>
              <div className="space-y-1">
                <div className="text-[28px] font-bold">100+</div>
                <div className="text-md text-black-700">Customers</div>
              </div>
            </div>
            <div className="group relative flex items-center bg-white rounded-lg shadow-card overflow-hidden w-full max-w-[600px] h-16 mt-6 md:top-[50px]">
              <input aria-label="Search" type="text" placeholder="What are you looking for?" className="flex-1 px-5 py-3 text-lg outline-none w-full md:height-[50px]" />
              <button className="mr-2 rounded-md bg-[#C1DCDC] text-white p-2"><Search size={28} color='black' /></button>
            </div>
          </div>
         
          <div className="relative h-[420px] sm:h-[460px] md:h-[520px]">
            <Image src="/images/hero-plant.webp" alt="Hero plant" fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px" priority className="object-contain z-10 mt-10" />
            <Image src="/images/hero-background.webp" alt="Hero plant" fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px" priority className="object-contain z-1 mt-40" />
          </div>
        </div>

         <div className="absolute left-[40px] md:left-[700px] top-[220px] md:top-[340px]">
          <Image src="/images/doodle-arrow-left.webp" alt="Decorative arrow" width={250} height={70} loading="lazy" />
        </div>
        
        <div className="absolute right-20 top-12">
          <Image src="/images/doodle-arrow-right.webp" alt="Decorative arrow" width={120} height={150} loading="lazy" />
        </div>
      </div>
    </section>
  )
}