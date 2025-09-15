// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-100 via-blue-50 to-blue-200 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">About Aquacharm</h1>
        <p className="text-lg max-w-2xl mx-auto">
          At Aquacharm, we bring the beauty and serenity of aquatic life closer to you.
          From premium aquariums to exotic fishes, we make your spaces lively and refreshing.
        </p>
      </section>

      {/* Wave Divider */}
      <div className="relative">
        <svg
          className="absolute top-0 w-full h-20 text-blue-100"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,154.7C560,139,640,117,720,128C800,139,880,181,960,197.3C1040,213,1120,203,1200,181.3C1280,160,1360,128,1400,112L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 px-6 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h2>
          <p>
            To create sustainable, beautiful aquatic experiences that connect people
            with nature and promote well-being in homes and workplaces.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Vision</h2>
          <p>
            To be a leading provider of aquatic solutions worldwide,
            inspiring a love for marine life through innovation and care.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Aquacharm in Numbers</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <p className="text-5xl font-bold">500+</p>
            <p className="mt-2">Happy Customers</p>
          </div>
          <div>
            <p className="text-5xl font-bold">200+</p>
            <p className="mt-2">Aquariums Installed</p>
          </div>
          <div>
            <p className="text-5xl font-bold">50+</p>
            <p className="mt-2">Exotic Fish Species</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Want to know more?</h2>
        <p className="mb-6">Get in touch with us and explore our world of aquatic beauty.</p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
