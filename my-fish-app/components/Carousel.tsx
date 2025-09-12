'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import fish JSON directly
import fishData from '@/mock-data/fish.json' // Adjust path if necessary

type Fish = {
  id: number
  name: string
  description: string
  price?: string | number
  image: string
}

export default function FishSlider() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Our Featured Fish
        </h2>

        {/* Empty State */}
        {fishData.length === 0 && (
          <p className="text-center text-gray-600">No fish available right now.</p>
        )}

        {/* Swiper Carousel */}
        {fishData.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {fishData.map((fish: Fish) => (
              <SwiperSlide key={fish.id}>
                <Link href={`/fish/${fish.id}`} className="block h-full">
                  <div className="bg-white shadow-lg rounded-xl overflow-hidden h-full flex flex-col cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition duration-300">
                    <img
                      src={fish.image}
                      alt={fish.name || 'Fish image'}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold line-clamp-1">{fish.name}</h3>
                      <p className="text-sm text-gray-600 mt-1 flex-grow line-clamp-3">
                        {fish.description}
                      </p>
                      {fish.price && (
                        <p className="mt-3 text-indigo-600 font-bold">
                          ₹{fish.price}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}
