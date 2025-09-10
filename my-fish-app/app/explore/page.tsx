"use client";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { id: 1, title: "Terrarium", slug: "terrarium", description: "Reptiles & plants", image: "/images/terrarium.jpg" },
  { id: 2, title: "Freshwater", slug: "freshwater", description: "Rivers, lakes & ponds", image: "/images/freshwater.jpg" },
  { id: 3, title: "Marine", slug: "marine", description: "Ocean & reefs", image: "/images/marine.jpg" }
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-blue-100 to-blue-400 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Categories</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map(cat => (
            <div key={cat.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
              <Image src={cat.image} alt={cat.title} width={400} height={250} className="w-full h-52 object-cover" />
              <div className="p-6 text-left">
                <h2 className="text-2xl font-semibold">{cat.title}</h2>
                <p className="text-gray-600 mt-2">{cat.description}</p>
                <Link href={`/explore/${cat.slug}`}>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
