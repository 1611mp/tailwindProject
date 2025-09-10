'use client'

import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function SideVideos({ children }: Props) {
  return (
    <div className="flex w-full max-w-7xl items-center justify-center px-4 py-12 bg-sky-300">
      {/* Left video */}
      <div className="hidden lg:flex w-[20%] h-[300px] justify-end pr-4">
        <video
          src="/fish-left.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover rounded-md opacity-80"
        />
      </div>

      {/* Center content (FishSlider) */}
      <div className="w-full max-w-3xl h-[300px] flex items-center justify-center px-4">
        {children}
      </div>

      {/* Right video */}
      <div className="hidden lg:flex w-[20%] h-[300px] justify-start pl-4">
        <video
          src="/fish-right.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover rounded-md opacity-80"
        />
      </div>
    </div>
  )
}
