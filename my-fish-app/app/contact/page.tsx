// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have a question or want to bring Aquacharm to your space?
          Reach out and we’ll be happy to help.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Send us a message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Email</h3>
            <p>support@aquacharm.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Location</h3>
            <p>Delhi, India</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Business Hours</h3>
            <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative">
        <svg
          className="absolute bottom-0 w-full h-20 text-blue-200"
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
    </main>
  );
}
