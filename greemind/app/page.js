"use client"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import StatsBanner from '../components/StatsBanner'
import CategoryCard from '../components/CategoryCard'
import TestimonialCard, { TestimonialsCarousel, TestimonialsIndicators } from '../components/TestimonialCard'
import { useState } from 'react'
import Footer from '../components/Footer'

export default function Page() {
  const [tIndex, setTIndex] = useState(0)
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="products" className="container-max section-spacer">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <div className="section-title text-6xl font-bold w-[200px] font-size-[38px]">Best Selling Plants</div>
            <p className="text-gray-600 mt-2 w-[300px]">Easiest way to healthy life by buying your favorite plants</p>
            <div className="mt-4">
               <button className="inline-flex items-center justify-center bg-[#C1DCDC] rounded-lg text-black px-6 py-3 text-sm font-medium hover:bg-mint transition gap-2">See more <span aria-hidden>→</span></button>
         </div>
          </div>
          <ProductCard title="Natural Plants" price="1,400.00" image="/images/product-natural-1.webp" alt="Natural plants" />
          <ProductCard title="Artificial Plants" price="900.00" image="/images/product-hanging-2.webp" alt="Artificial hanging plant" />
          <ProductCard title="Artificial Plants" price="3,500.00" image="/images/product-cactus-3.webp" alt="Cactus plant" />
        </div>
      </section>
      <StatsBanner />
       <div className="text-center mb-40 mt-40">
            <div className="section-title text-6xl font-bold">Categories</div>
            <p className="text-gray-600 mt-2">Find what you are looking for</p>
          </div>
      <section className="section-spacer bg-[#e0f2f1]">
        <div className="max-w-7xl mx-auto py-20 px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="translate-y-40 md:-translate-y-40 transition-transform"><CategoryCard title="Natural Plants" image="/images/category-natural.webp" alt="Natural plants" /></div>
            <div className="translate-y-0 md:translate-y-0">
              <CategoryCard title="Plant Accessories" image="/images/category-accessories.webp" alt="Plant accessories" />
              <div className="mt-3 text-center text-gray-600">Horem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="translate-y-40 md:-translate-y-40 transition-transform"><CategoryCard title="Artificial Plants" image="/images/category-artificial.webp" alt="Artificial plants" /></div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center justify-center bg-white rounded-lg text-black px-6 py-3 text-sm font-medium hover:bg-mint transition gap-2">Explore <span aria-hidden>→</span></button>
          </div>
        </div>
      </section>
      <section className="container-max section-spacer">
        <div className="flex items-center justify-between mt-[100px]">
          <div className="section-title max-w-[400px] font-bold text-6xl mb-[80px]">What customers say about GREEMIND?</div>
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