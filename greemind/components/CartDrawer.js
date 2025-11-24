"use client"
import { X, Trash2, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { useCart } from './CartContext'

export default function CartDrawer({ isOpen, onClose }) {
    const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart()

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col animate-slide-in">
                {/* Header */}
                <div className="p-6 flex items-center justify-between border-b">
                    <h2 className="text-2xl font-poppins font-bold">Your Cart ({cartItems.length})</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
                        <X size={24} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                                <Image src="/images/Cart.webp" alt="Empty Cart" width={48} height={48} className="opacity-50" />
                            </div>
                            <p className="text-gray-500 font-poppins text-lg">Your cart is empty</p>
                            <button
                                onClick={onClose}
                                className="px-6 py-3 bg-[#C1DCDC] rounded-lg font-medium hover:bg-mint transition"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-poppins font-medium text-lg">{item.title}</h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="font-poppins font-medium">₱ {item.price}</div>
                                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                className="p-1 hover:bg-white rounded-md transition"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:bg-white rounded-md transition"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600 font-poppins">Subtotal</span>
                            <span className="text-xl font-poppins font-bold">₱ {subtotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full py-4 bg-[#C1DCDC] rounded-xl font-poppins font-bold text-lg hover:bg-mint transition shadow-sm">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
