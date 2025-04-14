"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Tabs = () => {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')

  const tabs = [
    {
      name: "Popular",
      url: "popular"
    },
    {
      name: "Now Playing",
      url: "now_playing"
    },
    {
      name: "Upcoming",
      url: "upcoming"
    }
  ]

  return (
    <div className="tabs-container p-5 m-5 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link 
          key={i}
          href={`/?genre=${tab.url}`}
          className={`tab-link cursor-pointer hover:opacity-50 transition-opacity ${tab.url === genre ? "active" : ""}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  )
}

export default Tabs