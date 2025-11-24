"use client"
import Link from 'next/link'
import { X, ChevronRight, HelpCircle, FileText, Info } from 'lucide-react'

export default function NavMenu({ isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <>
            {/* Mobile Drawer (Visible on small screens) */}
            <div className="md:hidden fixed inset-0 z-50">
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />
                <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl animate-slide-in flex flex-col">
                    <div className="p-6 flex justify-end">
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex-1 px-6 space-y-2">
                        <Link href="#" onClick={onClose} className="block py-3 text-xl font-poppins font-medium hover:text-[#C1DCDC] transition">Home</Link>
                        <Link href="#products" onClick={onClose} className="block py-3 text-xl font-poppins font-medium hover:text-[#C1DCDC] transition">Products</Link>
                        <Link href="#contacts" onClick={onClose} className="block py-3 text-xl font-poppins font-medium hover:text-[#C1DCDC] transition">Contacts</Link>
                        <div className="h-px bg-gray-100 my-4" />
                        <Link href="#" className="flex items-center justify-between py-3 text-gray-600 font-poppins hover:text-black transition">
                            About Us <ChevronRight size={16} />
                        </Link>
                        <Link href="#" className="flex items-center justify-between py-3 text-gray-600 font-poppins hover:text-black transition">
                            FAQ <ChevronRight size={16} />
                        </Link>
                        <Link href="#" className="flex items-center justify-between py-3 text-gray-600 font-poppins hover:text-black transition">
                            Terms & Conditions <ChevronRight size={16} />
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Desktop More Menu (Visible on medium+ screens) */}
            {isOpen && (
                <div className="hidden md:block fixed inset-0 z-50">
                    <div
                        className="absolute inset-0 bg-transparent"
                        onClick={onClose}
                    />
                    <div className="absolute right-4 top-20 w-64 bg-white rounded-xl shadow-xl border border-gray-100 animate-fade-in">
                        <div className="p-2">
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition group">
                                <Info size={20} className="text-gray-400 group-hover:text-[#C1DCDC]" />
                                <span className="font-poppins text-gray-700">About Us</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition group">
                                <HelpCircle size={20} className="text-gray-400 group-hover:text-[#C1DCDC]" />
                                <span className="font-poppins text-gray-700">FAQ</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition group">
                                <FileText size={20} className="text-gray-400 group-hover:text-[#C1DCDC]" />
                                <span className="font-poppins text-gray-700">Terms & Conditions</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
