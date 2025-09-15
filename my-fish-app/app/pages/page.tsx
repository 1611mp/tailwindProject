"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Terrarium",
    description:
      "Terrarium organisms like reptiles, amphibians, and plants that thrive in enclosed glass habitats.",
    image: "/terrarium1.jpg",
    link: "/organisms/terrarium",
  },
  {
    id: 2,
    title: "Freshwater",
    description:
      "Freshwater fishes and organisms commonly found in rivers, lakes, and ponds.",
    image: "/freshwater.jpg",
    link: "/organisms/freshwater",
  },
  {
    id: 3,
    title: "Marine",
    description:
      "Marine fishes and organisms that inhabit saltwater oceans and seas.",
    image: "/marine.jpg",
    link: "/organisms/marine",
  },
];

export default function PagesSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-coral-300 via-blue-100 to-blue-400 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Our Pages
        </h1>
        <p className="text-gray-600 mb-12">
          Discover different species and organisms in their natural habitats.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {cat.title}
                </h2>
                <p className="text-gray-600 mt-3">{cat.description}</p>

                {/* ✅ Use Link for navigation */}
                <Link href={cat.link}>
                  <button className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
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
