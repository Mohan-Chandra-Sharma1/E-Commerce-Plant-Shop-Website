"use client"
import { useState } from 'react'
import { X, Mail, Lock, User } from 'lucide-react'

export default function AuthModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    const [errors, setErrors] = useState({})

    if (!isOpen) return null

    const validateForm = () => {
        const newErrors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!isLogin && !formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            // Handle successful login/signup here
            console.log('Form submitted:', formData)
            onClose()
            // Reset form
            setFormData({ name: '', email: '', password: '' })
            setErrors({})
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition"
                >
                    <X size={24} />
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-poppins font-bold text-[#1E1E1E] mb-2">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-gray-500 font-poppins">
                        {isLogin ? 'Enter your details to sign in' : 'Join us for the best plant experience'}
                    </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="space-y-1">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className={`w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border ${errors.name ? 'border-red-500' : 'border-transparent'} focus:ring-2 focus:ring-[#C1DCDC] outline-none font-poppins transition`}
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-sm ml-1">{errors.name}</p>}
                        </div>
                    )}

                    <div className="space-y-1">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className={`w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border ${errors.email ? 'border-red-500' : 'border-transparent'} focus:ring-2 focus:ring-[#C1DCDC] outline-none font-poppins transition`}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm ml-1">{errors.email}</p>}
                    </div>

                    <div className="space-y-1">
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className={`w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border ${errors.password ? 'border-red-500' : 'border-transparent'} focus:ring-2 focus:ring-[#C1DCDC] outline-none font-poppins transition`}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm ml-1">{errors.password}</p>}
                    </div>

                    <button type="submit" className="w-full py-4 bg-[#C1DCDC] rounded-xl font-poppins font-bold text-lg hover:bg-mint transition shadow-sm mt-4">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-500 font-poppins">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => {
                                setIsLogin(!isLogin)
                                setErrors({})
                                setFormData({ name: '', email: '', password: '' })
                            }}
                            className="text-[#1E1E1E] font-bold hover:underline"
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
