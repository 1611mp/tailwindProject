import { useEffect, useState } from "react";
import axios from "axios";

type Species = {
  id: number;
  name: string;
  description: string;
  image?: string;
};

export default function SpeciesPage() {
  const [species, setSpecies] = useState<Species[]>([]);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const res = await axios.get<Species[]>("/api/species");
        setSpecies(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSpecies();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-green-100 to-pink-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Species</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {species.map((sp) => (
          <div
            key={sp.id}
            className="bg-white rounded-xl shadow p-4 hover:scale-105 transition-transform"
          >
            {sp.image && (
              <img
                src={sp.image}
                alt={sp.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{sp.name}</h2>
            <p className="text-gray-700">{sp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
