import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Form() {
  return (
    <div className="w-full max-w-lg p-6 bg-sky-300">
      <form className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm text-gray-600">Enter your name and email address.</p>
        </div>

        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
            First Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
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
            className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          />
        </div>

        <div className="flex items-center">
          <input
            id="subscribe"
            name="subscribe"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
            Subscribe to newsletter
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
