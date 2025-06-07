export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12 flex flex-col items-center justify-center text-gray-800">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 text-blue-700">
          Welcome to Your Next.js App
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          This is a clean starter template built with <strong>Next.js</strong> and styled using <strong>TailwindPlus</strong>.
          You can now build scalable, beautiful UIs fast.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/about"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow transition duration-200"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-xl transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
