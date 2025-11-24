"use client"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import StatsBanner from '../components/StatsBanner'
import CategoryCard from '../components/CategoryCard'
import TestimonialCard, { TestimonialsCarousel, TestimonialsIndicators } from '../components/TestimonialCard'
import { useState } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Page() {
  const [tIndex, setTIndex] = useState(0)
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false)

  return (
    <main>
      <Navbar />
      <Hero />
      <section id="products" className="container-max section-spacer">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <div className="font-poppins font-bold text-[32px] leading-none text-[#1E1E1E] w-[200px] mb-6 leading-[1.5]">Best Selling Plants</div>
            <p className="text-gray-600 mt-2 w-[200px] font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] opacity-60 leading-[1.5] mb-6">Easiest way to healthy life by buying your favorite plants</p>
            <div className="mt-4">
              <Link href="/products" className="inline-flex items-center justify-center bg-[#C1DCDC] rounded-lg text-black px-6 py-3 text-lg font-medium hover:bg-[#C1DCDD]/50 transition gap-2 font-poppins font-size-[32px]">See more <span aria-hidden>→</span></Link>
            </div>
          </div>
          <ProductCard id="natural-1" title="Natural Plants" price="1,400.00" image="/images/product-natural-1.webp" alt="Natural plants" />
          <ProductCard id="artificial-1" title="Artificial Plants" price="900.00" image="/images/product-hanging-2.webp" alt="Artificial hanging plant" />
          <ProductCard id="cactus-1" title="Artificial Plants" price="3,500.00" image="/images/product-cactus-3.webp" alt="Cactus plant" />
        </div>
      </section>
      <StatsBanner />
      <div className="text-center mb-40 mt-40">
        <div className="font-poppins font-bold text-[32px] leading-none text-[#1E1E1E]">Categories</div>
        <p className="text-gray-600 mt-2 font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] opacity-60 mt-6">Find what you are looking for</p>
      </div>
      <section className="section-spacer bg-[#C1DCDC]">
        <div className="max-w-7xl mx-auto py-20 px-6">
          <div className="grid md:grid-cols-3 gap-12 transition-all duration-500 ease-in-out">
            <div className="translate-y-40 md:-translate-y-40 transition-transform"><CategoryCard title="Natural Plants" image="/images/category-natural.webp" alt="Natural plants" /></div>
            <div className="translate-y-0 md:translate-y-0">
              <CategoryCard title="Plant Accessories" image="/images/category-accessories.webp" alt="Plant accessories" />
              <div className="mt-2 text-center text-gray-600 font-poppins font-medium text-[18px] leading-[1.5] tracking-[0%] opacity-60 max-w-[300px] mx-auto">Horem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="translate-y-40 md:-translate-y-40 transition-transform"><CategoryCard title="Artificial Plants" image="/images/category-artificial.webp" alt="Artificial plants" /></div>

            {isCategoriesExpanded && (
              <>
                <div className="translate-y-40 md:-translate-y-40 transition-transform animate-fade-in"><CategoryCard title="Office Plants" image="/images/category_office_plants_1763931809788.png" alt="Office plants" /></div>
                <div className="translate-y-0 md:translate-y-0 animate-fade-in">
                  <CategoryCard title="Succulents" image="/images/category_succulents_1763931824134.png" alt="Succulents" />
                </div>
                <div className="translate-y-40 md:-translate-y-40 transition-transform animate-fade-in"><CategoryCard title="Flowering Plants" image="/images/category_flowering_plants_1763931839490.png" alt="Flowering plants" /></div>
              </>
            )}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
              className="inline-flex items-center justify-center bg-white rounded-lg text-black px-6 py-3 text-lg font-size-[20px] font-poppins font-medium hover:bg-mint transition gap-2"
            >
              {isCategoriesExpanded ? 'Show Less' : 'Explore'} <span aria-hidden className={`transition-transform duration-300 ${isCategoriesExpanded ? 'rotate-180' : ''}`}>→</span>
            </button>
          </div>
        </div>
      </section>
      <section className="container-max section-spacer">
        <div className="flex items-center justify-between mt-[100px]">
          <div className="font-poppins font-bold text-[32px] leading-none text-[#1E1E1E] max-w-[400px] mb-[80px]">What customers say about GREEMIND?</div>
          <TestimonialsIndicators
            items={[{}, {}, {}]}
            index={tIndex}
            setIndex={setTIndex}
          />
        </div>
        <div className="mt-6">
          <TestimonialsCarousel
            items={[
              { text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', name: 'John Doe', role: 'Youtuber', rating: '4.5', avatar: '/images/avatar-john.webp', className: 'bg-[#C1DCDC]' },
              { text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', name: 'Esha Doe', role: 'Influencer', rating: '4.8', avatar: '/images/avatar-jane.webp', className: 'bg-[#C1DCDC]' },
              { text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', name: 'John Doe', role: 'Youtuber', rating: '4.5', avatar: '/images/avatar-john.webp', className: 'bg-[#C1DCDC]' },
              { text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', name: 'Esha Doe', role: 'Influencer', rating: '4.8', avatar: '/images/avatar-jane.webp', className: 'bg-[#C1DCDC]' },
            ]}
            index={tIndex}
            onIndexChange={setTIndex}
          />
        </div>
      </section>
      <Footer />
    </main>
  )
}