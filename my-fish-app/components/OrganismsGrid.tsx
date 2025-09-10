'use client'
import { useEffect, useState } from 'react'

interface Organism {
  id: number
  name: string
  category: string
  description: string
  image: string
  price?: number
}

interface OrganismGridProps {
  category: string
}

export default function OrganismGrid({ category }: OrganismGridProps) {
  const [organisms, setOrganisms] = useState<Organism[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/organisms.json')
      .then(res => res.json())
      .then((data: Organism[]) => {
        setOrganisms(data.filter(o => o.category === category))
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [category])

  if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>
  if (!loading && organisms.length === 0) return <p className="text-center mt-20 text-xl">No {category} found.</p>

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-blue-700 via-blue-400 to-sky-300">
      <h1 className="text-4xl font-bold mb-10 text-center text-white">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {organisms.map(o => (
          <div
            key={o.id}
            className="bg-sky-200 shadow-lg rounded-xl p-6 hover:scale-105 transition transform duration-300 flex flex-col items-center"
          >
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <img
                src={o.image}
                alt={o.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-semibold text-xl mt-4 text-center">{o.name}</h2>
            <p className="mt-2 text-gray-700 text-center">{o.description}</p>
            {o.price && (
              <p className="mt-2 font-bold text-blue-700 text-center">₹{o.price}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
