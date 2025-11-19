import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 bg-sky/40">
      <div className="container-max py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-semibold tracking-wider text-navy">GREEMIND</div>
            <p className="mt-3 text-gray-600">We help you find your dream plant</p>
            <div className="mt-4 flex items-center gap-3 text-navy">
              <a aria-label="Facebook" href="#"><Facebook /></a>
              <a aria-label="Instagram" href="#"><Instagram /></a>
              <a aria-label="Twitter" href="#"><Twitter /></a>
            </div>
          </div>
          <div>
            <div className="font-semibold text-navy">Information</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-navy">Company</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#">Community</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Our story</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-navy">Contact</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#">Getting Started</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-gray-500 text-sm">2025 © All Rights Reserved. Terms of use GREEMIND</div>
      </div>
    </footer>
  )
}