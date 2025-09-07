'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { NAV_ITEMS } from '@/constants/navItems'
import { Roboto, Rubik } from 'next/font/google'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

// 🔁 Reusable Fish Image Component
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
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-400 to-sky-300">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex max-w-7xl items-center justify-between  lg:px-8">
          {/* <div className="flex lg:flex-1  ">

          </div> */}

          <div className="hidden font-[Roboto] lg:flex gap-6">
             {/* <a href="#" className="m-0 p-0">
              <span className="sr-only">Welcome to AquaCharm</span>
              <img src="/fish-logo.jpg" alt="" className="h-auto w-20" />
            </a> */}
            {NAV_ITEMS.map(({ label, items }) => (
              <div key={label} className="relative">
                <button
                  onClick={() => toggleMenu(label)}
                  className="flex items-center gap-1 p-1.5 text-xl font-semibold text-white hover:text-sky-500"
                >
                  {label} <ChevronDownIcon className="h-4 w-4" />
                </button>
                {openMenu === label && (
                  <ul className="absolute left-0 mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-gray-200 z-50">
                    {items.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img src="/fish-logo.jpg" alt="" className="h-8 w-auto" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern id="bg-pattern" x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" />
            </svg>
            <rect fill="url(#bg-pattern)" width="100%" height="100%" />
          </svg>

          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>

          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                {/* Left Text Column */}
                <div className="flex relative w-full bg-sky-200 text-center p-8 items-center flex-col lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight mt-8 text-blue-500 sm:text-7xl">
                    Welcome to AquaCharm – Your Gateway to an Underwater Paradise!
                  </h1>
                  <p className="mt-8 text-lg font-medium text-blue-700 p-8 sm:text-xl/8">
                    Dive into a vibrant world of ornamental fish, where beauty meets serenity. At AquaCharm, we
                    specialize in handpicked, healthy, and colorful fish that turn any aquarium into a living
                    masterpiece. Whether you're a beginner or a seasoned aquarist, you'll find stunning freshwater and
                    exotic species that bring life to your space.
                  </p>
                  <a
                    href="#"
                    className="mt-10 rounded-md bg-sky-800 px-3.5 py-2.5 mb-8 text-sm font-semibold text-white shadow-xs hover:bg-sky-500"
                  >
                    Get started
                  </a>
                </div>

                {/* Right Image Column */}
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
        </div>
      </main>
    </div>
  )
}
