import Image from 'next/image'
import { Package } from 'lucide-react'

export default function StatsBanner() {
  return (
    <section id="about" className="container-max mt-28">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center px-4 py-2 text-[38px] text-black font-bold">About us</div>
        <br/>
        <div className="inline-flex items-center justify-center px-4 py-2 text-sm text-grey-600">Order now and appreciate the beauty of nature</div>
      </div>
      <div className="grid md:grid-cols-3 gap-0 bg-transparent">
        <div className=" p-8 text-center">
          <div className="mx-auto mb-3 rounded-full bg-mint w-20 h-20 flex items-center justify-center">
            <Image src="/images/leaf-icon.webp" alt="Leaf icon" width={38} height={45} loading="lazy" />
          </div>
          <div className="font-semibold text-[35px} text-black font-bold ">Large Assortment</div>
          <p className="text-gray-600 text-sm mt-2 max-w-[300px] mx-auto">We offer many different types of products with fewer variations.</p>
        </div>
        <div className=" p-8 text-center">
          <div className="mx-auto mb-3 rounded-full bg-mint w-20 h-20 flex items-center justify-center">
            <Image src="/images/package-icon.webp" alt="Package icon" width={38} height={45} loading="lazy" />
          </div>
          <div className="font-semibold text-[35px} text-black font-bold ">Fast & Free Shipping</div>
          <p className="text-gray-600 text-sm mt-2 max-w-[300px] mx-auto">4-day or less delivery time, free shipping and expedited option.</p>
        </div>
        <div className=" p-8 text-center">
          <div className="mx-auto mb-3 rounded-full bg-mint w-20 h-20 flex items-center justify-center">
            <Image src="/images/phone-icon.webp" alt="Phone icon" width={38} height={45} loading="lazy" />
          </div>
          <div className="font-semibold text-[35px} text-black font-bold ">24/7 Support</div>
          <p className="text-gray-600 text-sm mt-2 max-w-[300px] mx-auto">Answers to any business related inquiry in real-time.</p>
        </div>
      </div>
    </section>
  )
}