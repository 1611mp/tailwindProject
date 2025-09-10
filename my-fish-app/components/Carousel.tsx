'use client'


import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Fish = {
  id: number;
  name: string;
  description: string;
  price?: string;
  image: string;
};

export default function FishSlider() {
  const [fishData, setFishData] = useState<Fish[]>([])

  useEffect(() => {
    fetch('/api/fish')
      .then(res => res.json())
      .then(data => setFishData(data))
      .catch(() => setFishData([]))
  }, [])

  return (
    <div className="w-full h-full bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-500
 overflow-hidden"> {/* ✅ no extra padding */}

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Our Featured Fish</h2> {/* ✅ smaller margin */}

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {fishData.map((fish) => (
  <SwiperSlide key={fish.id}>
    <Link
      href={`/fish/${fish.id}`}
      className="block h-full"
    >
      <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col cursor-pointer hover:scale-105 transition">
        <img
          src={fish.image}
          alt={fish.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-3 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold">{fish.name}</h3>
          <p className="text-sm text-gray-600 flex-grow">{fish.description}</p>
          {fish.price && <p className="mt-2 text-indigo-600 font-bold">{fish.price}</p>}
        </div>
      </div>
    </Link>
  </SwiperSlide>
))}
        </Swiper>
      </div>
    </div>
  )
}
