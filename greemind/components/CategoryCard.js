"use client"
import Image from 'next/image'
export default function CategoryCard({ title, image, alt }) {
  return (
    <div className="rounded-lg overflow-hidden">
  
      <div className="relative h-[500px]">
        <Image src={image} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-bottom" loading="lazy" />
      </div>
          <div className=" py-6 text-center">
        <div className="font-semibold text-navy">{title}</div>
      </div>
    </div>
  )
}