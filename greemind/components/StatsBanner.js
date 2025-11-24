import Image from 'next/image'
import { Package } from 'lucide-react'

export default function StatsBanner() {
  return (
    <section id="about" className="container-max mt-28">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center px-4 py-2 text-[32px] text-[#1E1E1E] font-poppins font-bold leading-none">About us</div>
        <br />
        <p className="inline-flex items-center justify-center px-4 py-2 text-grey-600 font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] opacity-60 mt-2">Order now and appreciate the beauty of nature</p>
      </div>
      <div className="grid md:grid-cols-3 gap-0 bg-transparent">
        <div className=" p-8 text-center">
          <div className="mx-auto mb-3 rounded-full bg-[#C1DCDC] w-20 h-20 flex items-center justify-center">
            <Image src="/images/leaf-icon.webp" alt="Leaf icon" width={38} height={45} loading="lazy" />
          </div>
          <div className="text-[18px] text-[#1E1E1E] font-poppins font-bold leading-none">Large Assortment</div>
          <p className="text-gray-600 mt-2 max-w-[400px] mx-auto font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] opacity-60 mt-4 leading-[1.5]">we offer many different types of products with fewer variations in each category.</p>
        </div>
        <div className=" p-8 text-center">
          <div className="mx-auto mb-3 rounded-full bg-[#C1DCDC] w-20 h-20 flex items-center justify-center">
            <Image src="/images/package-icon.webp" alt="Package icon" width={38} height={45} loading="lazy" />
          </div>
          <div className="text-[18px] text-[#1E1E1E] font-poppins font-bold leading-none">Fast & Free Shipping</div>
          <p className="text-gray-600 mt-2 max-w-[400px] mx-auto font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] opacity-60 mt-4 leading-[1.5]">4-day or less delivery time, free shipping and an expedited delivery option.</p>
        </div>
        <div className=" p-8 text-center">
          <div className="mx-auto mb-3 rounded-full bg-[#C1DCDC] w-20 h-20 flex items-center justify-center">
            <Image src="/images/phone-icon.webp" alt="Phone icon" width={38} height={45} loading="lazy" />
          </div>
          <div className="text-[18px] text-[#1E1E1E] font-poppins font-bold leading-none">24/7 Support</div>
          <p className="text-gray-600 mt-2 max-w-[400px] mx-auto font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] opacity-60 mt-4 leading-[1.5]">answers to any business related inquiry 24/7 and in real-time.</p>
        </div>
      </div>
    </section>
  )
}