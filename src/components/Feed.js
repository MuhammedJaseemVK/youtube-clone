import React, { useContext, useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { SidebarContext } from './context/SidebarContext'

function Feed() {

  const [, , selectedCategory, setSelectedCategory] = useContext(SidebarContext)
  useEffect(() => {
    // fetchFromAPI(`search/?part=snippet&order=relevance&q=mrbeast&safeSearch=moderate&type=video,channel,playlist`)
    fetchFromAPI(`search/?q=${selectedCategory}}`)
  }, [selectedCategory])
  return (
    <div className='w-full bg-pink-500 h-full p-2'>
      <div className='font-bold text-4xl text-red-500'>
        {selectedCategory} <span className='text-white'>Videos</span>
      </div>
    </div>
  )
}

export default Feed