import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#C1DCDC]">
      <div className="container-max py-14">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="">
            <Image src="/images/GREENMIND.webp" alt="GREENMIND" width={150} height={25} className="object-contain" />
            <p className="mt-8 text-gray-600 font-poppins font-medium text-[18px] leading-[1.5] tracking-[0%] opacity-60 max-w-[180px]">We help you find your dream plant</p>
            <div className="mt-6 flex items-center gap-3 text-navy">
              <a aria-label="Facebook" href="#" className="w-12 h-12 flex items-center justify-center hover:bg-mint/20 transition">
                <Image src="/images/facebook.webp" alt="Facebook" width={60} height={60} />
              </a>
              <a aria-label="Instagram" href="#" className="w-12 h-12 md:ml-[10px] flex items-center justify-center hover:bg-mint/20 transition">
                <Image src="/images/instagram.webp" alt="Instagram" width={60} height={60} />
              </a>
              <a aria-label="Twitter" href="#" className="w-12 h-12 md:ml-[10px] flex items-center justify-center hover:bg-mint/20 transition">
                <Image src="/images/twiter.webp" alt="Twitter" width={60} height={60} />
              </a>
            </div>
          </div>
          <div className="md:ml-[600px]">
            <div className="font-poppins font-bold text-[18px] leading-[100%] tracking-[0%] text-[#1E1E1E]">Information</div>
            <ul className="mt-8 space-y-6 text-gray-600 font-poppins font-normal text-[18px] leading-[100%] tracking-[0%] opacity-60">
              <li><a href="#">About</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="md:ml-[400px]">
            <div className="font-poppins font-bold text-[18px] leading-[100%] tracking-[0%] text-[#1E1E1E]">Company</div>
            <ul className="mt-8 space-y-6 text-gray-600 font-poppins font-normal text-[18px] leading-[100%] tracking-[0%] opacity-60">
              <li><a href="#">Community</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Our story</a></li>
            </ul>
          </div>
          <div className="md:ml-[200px]">
            <div className="font-poppins font-bold text-[18px] leading-[100%] tracking-[0%] text-[#1E1E1E]">Contact</div>
            <ul className="mt-8 space-y-6 text-gray-600 font-poppins font-normal text-[18px] leading-[100%] tracking-[0%] opacity-60">
              <li><a href="#">Getting Started</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 text-gray-500 font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] opacity-70">2023 all Right Reserved Term of use GREENMIND</div>
      </div>
    </footer>
  )
}