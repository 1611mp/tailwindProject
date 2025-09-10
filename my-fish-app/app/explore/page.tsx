import Link from "next/link";

const categories = [
  { title: "Terrarium", image: "/images/terrarium.jpg" },
  { title: "Freshwater", image: "/images/freshwater.jpg" },
  { title: "Marine", image: "/images/marine.jpg" },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-blue-100 to-blue-400 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Categories</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{cat.title}</h2>
                <Link href={`/explore/${cat.title.toLowerCase()}`}>
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
