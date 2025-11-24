"use client"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'

export default function ProductsPage() {
    const products = [
        { id: 'natural-1', title: "Natural Plants", price: "1,400.00", image: "/images/product-natural-1.webp", alt: "Natural plants" },
        { id: 'artificial-1', title: "Artificial Plants", price: "900.00", image: "/images/product-hanging-2.webp", alt: "Artificial hanging plant" },
        { id: 'cactus-1', title: "Artificial Plants", price: "3,500.00", image: "/images/product-cactus-3.webp", alt: "Cactus plant" },
        { id: 'natural-2', title: "Natural Plants", price: "1,200.00", image: "/images/product-natural-1.webp", alt: "Natural plants" },
        { id: 'artificial-2', title: "Artificial Plants", price: "800.00", image: "/images/product-hanging-2.webp", alt: "Artificial hanging plant" },
        { id: 'cactus-2', title: "Artificial Plants", price: "3,200.00", image: "/images/product-cactus-3.webp", alt: "Cactus plant" },
    ]

    return (
        <main>
            <Navbar />
            <section className="container-max section-spacer pt-32">
                <div className="text-center mb-16">
                    <h1 className="font-poppins font-bold text-[48px] leading-none text-[#1E1E1E] mb-4">All Products</h1>
                    <p className="text-gray-600 font-poppins font-medium text-[18px] opacity-60">Explore our complete collection of plants</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            alt={product.alt}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    )
}
