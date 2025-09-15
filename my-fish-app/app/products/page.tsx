// app/products/page.tsx
"use client";

import { useEffect, useState } from "react";
// Remove this line: import { fetchWithAuth } from "@/lib/fetchWithAuth";

type Product = {
  id?: number;
  name: string;
  description: string;
  price?: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Change this line to use standard fetch
        const res = await fetch("/api/fish");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();

    // Optional: poll every 5 seconds to show new fish automatically
    const interval = setInterval(fetchProducts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cyan-100 via-blue-50 to-blue-200 py-10">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          Shop Products
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <li
              key={product.id ?? idx}
              className="bg-indigo-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden group flex flex-col"
            >
              {product.image && (
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-indigo-600 transition">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
                <div className="mt-4 flex gap-3">
                  <button className="flex-1 rounded-md bg-indigo-600 text-white py-2 hover:bg-indigo-700 transition font-medium">
                    Add to Cart
                  </button>
                  <button className="flex-1 rounded-md border border-indigo-600 text-indigo-600 py-2 hover:bg-indigo-50 transition font-medium">
                    ₹{product.price}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
