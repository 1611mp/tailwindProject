"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

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
  const slug = category ? category.toString().toLowerCase() : "";
  const [organisms, setOrganisms] = useState<Organism[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);
    fetch("/data/organisms.json")
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch JSON (${res.status})`);
        return res.json();
      })
      .then(data => {
        const list = data[slug] || [];
        setOrganisms(list);
      })
      .catch(err => {
        console.error("Error loading organisms:", err);
        setError("Could not load organisms. Check console/network.");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading…</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold capitalize mb-8">{slug} Organisms</h1>
        {organisms.length === 0 ? (
          <p className="text-gray-600">No organisms found for this category.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {organisms.map(org => (
              <div key={org.id} className="bg-white rounded-2xl shadow-lg p-6">
                <Image src={org.image} alt={org.name} width={400} height={250} className="w-full h-48 object-cover rounded-xl" />
                <h2 className="text-2xl font-semibold mt-4">{org.name}</h2>
                <p className="italic text-sm text-gray-500">{org.scientificName}</p>
                <p className="mt-2"><strong>Habitat:</strong> {org.habitat}</p>
                <p><strong>Food:</strong> {org.food}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
