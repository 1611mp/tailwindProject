export default function Form() {
  return (
    <div className="w-full  min-h-max flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white
">
      {/* Centered Form Box */}
      <div className="relative w-full max-w-md p-6 bg-gray-100 rounded-2xl shadow-lg">
        {/* Ribbon at the top */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2
                        bg-indigo-600 text-white text-sm font-semibold
                        px-4 py-1 rounded-full shadow-md">
          Subscribe to Newsletter
        </div>

        <form className="mt-8 space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Enter your name and email address.
            </p>
          </div>

          {/* First + Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="mt-2 block w-full rounded-lg bg-white px-3 py-2 text-gray-900
                           shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400
                           focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="mt-2 block w-full rounded-lg bg-white px-3 py-2 text-gray-900
                           shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400
                           focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 block w-full rounded-lg bg-white px-3 py-2 text-gray-900
                         shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400
                         focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            />
          </div>

          {/* Floating Subscribe Button */}
          <div className="sticky bottom-0 pt-4 bg-gray-100">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md
                         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
