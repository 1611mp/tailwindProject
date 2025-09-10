import { notFound } from "next/navigation";
import path from "path";
import { promises as fs } from "fs";

export default async function FishDetail({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "mock-data", "fish.json");
  const data = await fs.readFile(filePath, "utf-8");
  const fishList = JSON.parse(data);
  const fish = fishList.find((f: any) => String(f.id) === params.id);

  if (!fish) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{fish.name}</h1>
      <img src={fish.image} alt={fish.name} className="w-full h-64 object-cover rounded mb-4" />
      <div className="bg-white p-4 rounded shadow mb-4">
        <p className="text-lg mb-2">{fish.description}</p>
        <ul className="text-base space-y-2">
          {fish.scientific_name && <li><strong>Scientific Name:</strong> {fish.scientific_name}</li>}
          {fish.origin && <li><strong>Origin:</strong> {fish.origin}</li>}
          {fish.habitat && <li><strong>Habitat:</strong> {fish.habitat}</li>}
          {fish.size && <li><strong>Size:</strong> {fish.size}</li>}
          {fish.lifespan && <li><strong>Lifespan:</strong> {fish.lifespan}</li>}
          {fish.diet && <li><strong>Diet:</strong> {fish.diet}</li>}
          {fish.temperament && <li><strong>Temperament:</strong> {fish.temperament}</li>}
          {fish.care_tips && <li><strong>Care Tips:</strong> {fish.care_tips}</li>}
          {fish.interesting_fact && <li><strong>Interesting Fact:</strong> {fish.interesting_fact}</li>}
        </ul>
      </div>
    </div>
  );
}
