import { notFound } from "next/navigation";

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
      { alt: "Fittonia (Nerve Plant)", src: "/images/fittonia.jpg" },
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
    images: [
      { alt: "Goldfish", src: "/images/goldfish.jpg" },
      { alt: "Cichlid", src: "/images/cichlid.jpeg" },
      { alt: "Guppy", src: "/images/guppy.jpg" },
      { alt: "Catfish", src: "/images/catfish.jpg" },
    ],
    stats: [
      { label: "Known Species", value: "18,000+" },
      { label: "Aquariums Worldwide", value: "50M+" },
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

export default function OrganismCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const content = contentMap[params.category.toLowerCase()];

  if (!content) return notFound();

  return (
    <div className="overflow-hidden bg-gradient-to-b from-cyan-100 via-blue-50 to-blue-200 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 hover:text-sky-600 sm:text-5xl dark:text-white dark:hover:text-cyan-400">
            {content.title}
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700 dark:text-gray-300">
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
                  className="aspect-square bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10"
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
            <p className="text-base/7 font-semibold text-gray-500 dark:text-gray-400">
              Key Stats
            </p>
            <hr className="mt-6 border-t border-gray-200 dark:border-gray-700" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {content.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4 dark:border-gray-700"
                >
                  <dt className="text-sm/6 text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900 animate-pulse dark:text-white">
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
