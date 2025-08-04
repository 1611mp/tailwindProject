'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const fishData = [
  {
    name: 'Goldfish',
    description: 'A peaceful and colorful freshwater fish.',
    price: '₹150',
    image: '/goldfish.jpg',
  },
  {
    name: 'Betta',
    description: 'Known for its vibrant colors and long fins.',
    price: '₹250',
    image: '/betta.jpg',
  },
  {
    name: 'Guppy',
    description: 'Easy to care for and perfect for beginners.',
    price: '₹100',
    image: '/guppy.jpg',
  },
  {
    name: 'Discus',
    description: 'Elegant and bright, perfect for show tanks.',
    price: '₹850',
    image: '/discus.jpg',
  },
]

export default function FishSlider() {
  return (
    <div className="w-full py-10 bg-sky-300">
      <h2 className="text-3xl font-bold text-center mb-8">Our Featured Fish</h2>
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
        {fishData.map((fish, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={fish.image}
                alt={fish.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{fish.name}</h3>
                <p className="text-sm text-gray-600">{fish.description}</p>
                <p className="mt-2 text-indigo-600 font-bold">{fish.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
