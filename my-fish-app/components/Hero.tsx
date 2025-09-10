'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const dropdownItems = [
  { name: 'Freshwater', href: '/freshwater' },
  { name: 'Marine', href: '/marine' },
  { name: 'Terrarium', href: '/terrarium' },
]

const FishImage = ({ src }: { src: string }) => (
  <div className="relative">
    <img
      alt=""
      src={src}
      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    />
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
  </div>
)

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-400 to-sky-300">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex max-w-7xl items-center justify-between mx-auto px-6 lg:px-8">
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <img src="/fish-logo.jpg" alt="AquaCharm" className="h-8 w-auto" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section Content */}
      <main>
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              {/* Left Text */}
              <div className="flex relative w-full bg-sky-200 text-center p-8 items-center flex-col lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-5xl font-semibold tracking-tight mt-8 text-blue-500 sm:text-7xl">
                  Welcome to AquaCharm – Your Gateway to an Underwater Paradise!
                </h1>
                <p className="mt-8 text-lg font-medium text-blue-700 p-8 sm:text-xl/8">
                  Dive into a vibrant world of ornamental fish, where beauty meets serenity. Explore Freshwater, Marine, and Terrarium aquariums that bring life to your space.
                </p>

                {/* Hero Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`rounded-md px-4 py-2 text-sm font-semibold text-white shadow
                        ${item.name === 'Freshwater' ? 'bg-sky-800 hover:bg-sky-500' :
                        item.name === 'Marine' ? 'bg-teal-600 hover:bg-teal-500' :
                        'bg-orange-500 hover:bg-orange-400'}`}
                    >
                      Explore {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Images */}
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:pt-36">
                  <FishImage src="/fish4.jpg" />
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:pt-52 lg:pt-36">
                  <FishImage src="/fish5.jpg" />
                  <FishImage src="/fish2.jpg" />
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <FishImage src="/fish3.jpg" />
                  <FishImage src="/fish1.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
