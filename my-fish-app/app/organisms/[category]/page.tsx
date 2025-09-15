import { notFound } from "next/navigation";
import path from "path";
import { promises as fs } from "fs";

export default async function OrganismCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category.toLowerCase();

  // Dynamic data if freshwater
  let fishList: any[] = [];
  if (category === "freshwater") {
    const filePath = path.join(process.cwd(), "mock-data", "fish.json");
    const data = await fs.readFile(filePath, "utf-8");
    fishList = JSON.parse(data);
  }

  const contentMap: Record<
    string,
    {
      title: string;
      description: string;
      images: { alt: string; src: string }[];
      stats: { label: string; value: string }[];
      button: string;
    }
  > = {
    terrarium: {
      title: "Terrarium Organisms",
      description:
        "Terrariums are miniature ecosystems that thrive in glass containers, containing soil, plants, and small invertebrates...",
      images: [
        { alt: "Cushion Moss", src: "/images/moss.jpg" },
        { alt: "Fittonia", src: "/images/fittonia.jpg" },
        { alt: "Springtails", src: "/images/springtail.jpg" },
        { alt: "Isopods", src: "/images/isopods.jpg" },
      ],
      stats: [
        { label: "Moss Varieties", value: "15+" },
        { label: "Mini Ecosystems", value: "500+" },
        { label: "Cleanup Crew", value: "5+" },
        { label: "Low-maintenance", value: "Year-round" },
      ],
      button: "Learn More",
    },

    freshwater: {
      title: "Freshwater Fish",
      description:
        "Freshwater ecosystems are home to a wide variety of fish species, ranging from small schooling fish to large predators...",
      images: fishList.slice(0, 4).map((f) => ({
        alt: f.name,
        src: f.image,
      })), // ✅ auto from JSON
      stats: [
        { label: "Known Species", value: "18,000+" },
        { label: "In Your Dataset", value: `${fishList.length}` }, // ✅ dynamic count
        { label: "Popular Aquarium Fish", value: "100+" },
        { label: "Lifespan Range", value: "1–20 yrs" },
      ],
      button: "Explore Freshwater Fish",
    },

    marine: {
      title: "Marine Fish",
      description:
        "Marine ecosystems host some of the most colorful and diverse fish species on the planet...",
      images: [
        { alt: "Clownfish", src: "/images/Clownfish1.jpg" },
        { alt: "Tang", src: "/images/tang.jpg" },
        { alt: "Lionfish", src: "/images/lionfish.jpg" },
        { alt: "Seahorse", src: "/images/Seahorse.jpg" },
      ],
      stats: [
        { label: "Marine Species", value: "20,000+" },
        { label: "Coral Reef Diversity", value: "500+" },
        { label: "Endangered Species", value: "2,000+" },
        { label: "Lifespan Range", value: "2–50 yrs" },
      ],
      button: "Discover Marine Fish",
    },
  };

  const content = contentMap[category];
  if (!content) return notFound();

  return (
    <div className="overflow-hidden bg-gradient-to-b from-cyan-100 via-blue-50 to-blue-200 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {content.title}
          </h1>
          <p className="mt-6 text-xl text-gray-700 dark:text-gray-300">
            {content.description}
          </p>
        </div>

        {/* Image Grid */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              {content.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 overflow-hidden rounded-xl shadow-xl"
                >
                  <img
                    alt={img.alt}
                    src={img.src}
                    className="p-4 w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base font-semibold text-gray-500 dark:text-gray-400">
              Key Stats
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {content.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-y-2 pb-4 border-b border-dotted border-gray-300">
                  <dt className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="order-first text-4xl font-semibold text-gray-900 dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA Button */}
        <button className="mt-12 rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
          {content.button}
        </button>
      </div>
    </div>
  );
}
