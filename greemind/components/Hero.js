"use client"
import Image from 'next/image'
import { Search } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container-max mt-10">
      <div className="relative rounded-hero bg-[#C1DCDC] p-6 sm:p-10 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <h1 className="heading-hero w-full max-w-[500px] font-poppins font-extrabold text-[64px] leading-[64px]">Buy your dream plants</h1>
            <div className="flex items-start gap-6 text-navy">
              <div className="space-y-4 mt-2 md:w-[135px]">
                <div className="font-poppins font-medium text-[32px] leading-[100%] tracking-[0%] mb-4">50+</div>
                <div className="font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] mt-2">Plant Species</div>
              </div>
              <span className="h-16 w-[3px] bg-[#1E1E1E] self-center border-r-[2px] border-color-black-900"></span>
              <div className="space-y-4 mt-2 ml-6">
                <div className="font-poppins font-medium text-[32px] leading-[100%] tracking-[0%] mb-4">100+</div>
                <div className="font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] mt-2">Customers</div>
              </div>
            </div>
            <div className="group relative flex items-center bg-white rounded-lg shadow-card overflow-hidden w-full max-w-[600px] h-16 mt-6 md:top-[50px]">
              <input aria-label="Search" type="text" placeholder="What are you looking for?" className="flex-1 px-5 py-3 outline-none w-full md:height-[50px] font-poppins font-medium text-[18px] leading-[100%] tracking-[0%]" />
              <button className="mr-2 rounded-md bg-[#C1DCDC] text-white p-2"><Search size={28} color='black' /></button>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[460px] md:h-[520px]">
            <Image src="/images/hero-plant.webp" alt="Hero plant" fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px" priority className="object-contain z-10 mt-10" />
            <Image src="/images/hero-background.webp" alt="Hero plant" fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px" priority className="object-contain z-1 mt-40" />
          </div>
        </div>

        <div className="absolute left-[40px] md:left-[720px] top-[230px] md:top-[355px]">
          <Image src="/images/doodle-arrow-left.webp" alt="Decorative arrow" width={230} height={50} loading="lazy" />
        </div>

        <div className="absolute right-20 top-12">
          <Image src="/images/doodle-arrow-right.webp" alt="Decorative arrow" width={120} height={150} loading="lazy" />
        </div>
      </div>
    </section>
  )
}