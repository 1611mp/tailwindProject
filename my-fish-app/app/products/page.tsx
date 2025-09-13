"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  reviewCount?: number;
};

function ProductList({ products }: { products: Product[] }) {
  const { addItem } = useCart();
  const [addingId, setAddingId] = useState<number | null>(null);
  const [successId, setSuccessId] = useState<number | null>(null);

  function handleAddToCart(id: number, product: Product) {
    setAddingId(id);
    addItem({
      id,
      name: product.name,
      image: product.image,
      price: Number(product.price) || 0,
      quantity: 1,
    });
    setTimeout(() => {
      setAddingId(null);
      setSuccessId(id);
      setTimeout(() => setSuccessId(null), 1200);
    }, 700);
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product: Product, idx: number) => {
        const id = product.id ?? idx;
        return (
          <li
            key={id}
            className="bg-indigo-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden group flex flex-col"
          >
            {/* Product Image */}
            {product.image && (
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-indigo-600 transition">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4 flex-1">{product.description}</p>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <button
                  className={`flex-1 rounded-md bg-indigo-600 text-white py-2 hover:bg-indigo-700 transition relative font-medium ${
                    addingId === id ? "opacity-60 cursor-wait" : ""
                  }`}
                  disabled={addingId === id}
                  onClick={() => handleAddToCart(id, product)}
                >
                  {addingId === id ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Adding...
                    </span>
                  ) : successId === id ? (
                    <span className="flex items-center justify-center text-green-200 font-semibold">
                      Added!
                    </span>
                  ) : (
                    "Add to Cart"
                  )}
                </button>

                <button className="flex-1 rounded-md border border-indigo-600 text-indigo-600 py-2 hover:bg-indigo-50 transition font-medium">
                  ₹{product.price.toLocaleString()}
                </button>
              </div>

              {/* Optional Rating / Reviews */}
              {product.rating && (
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <span>⭐ {product.rating}</span>
                  {product.reviewCount && <span>({product.reviewCount} reviews)</span>}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/fish");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="w-full min-h-screen bg-indigo-100 py-10">
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Shop Products
      </h1>

      {/* Products Grid */}
      <ProductList products={products} />
    </div>
    </div>
  );
}
