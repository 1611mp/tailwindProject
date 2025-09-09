"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Organism {
  id: number;
  name: string;
  scientificName: string;
  habitat: string;
  food: string;
  image: string;
}

export default function CategoryPage() {
  const { category } = useParams();
  const [organisms, setOrganisms] = useState<Organism[]>([]);

  useEffect(() => {
    fetch("/data/organisms.json")
      .then((res) => res.json())
      .then((data) => {
        setOrganisms(data[category as keyof typeof data] || []);
      });
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold capitalize mb-8">{category} Organisms</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <img
                src={org.image}
                alt={org.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h2 className="text-2xl font-semibold mt-4">{org.name}</h2>
              <p className="italic text-gray-500">{org.scientificName}</p>
              <p><span className="font-semibold">Habitat:</span> {org.habitat}</p>
              <p><span className="font-semibold">Food:</span> {org.food}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
