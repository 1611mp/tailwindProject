'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Shop', href: '/shop' },
  { name: 'Pages', href: '/pages' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-blue-900">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image src="/Aquacharm-logo.png" alt="Aquacharm" width={40} height={40} />
          <span className="text-xl font-bold text-white">Aquacharm</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-white hover:text-sky-500"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm font-medium text-white hover:text-sky-500">Sign in</a>
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-white hover:text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-lg font-bold text-white">Menu</span>
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="px-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-2 py-2 text-white hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <a
                href="#"
                className="block w-full rounded-md bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-700"
              >
                Sign up
              </a>
              <a href="#" className="block text-center text-sm font-medium text-gray-600">
                Already have an account? <span className="text-indigo-600">Sign in</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
