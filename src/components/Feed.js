import React, { useContext, useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { SidebarContext } from './context/SidebarContext'
import VideoCard from './VideoCard';

function Feed() {
  const [searchResult, setSearchResult] = useState(null);
  const [, , selectedCategory, setSelectedCategory] = useContext(SidebarContext)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      setSearchResult(response.items)
    }
    fetchData();
  }, [selectedCategory])
  return (
    <div className='w-full bg-slate-800 h-full p-2'>
      <div className='font-bold text-4xl text-[#FF0000] p-2'>
        {selectedCategory} <span className='text-white'>Videos</span>
      </div>
      <div className='grid grid-cols-4 gap-2' >
        {
          searchResult && searchResult.map((video, index, searchResult) => {
            return <VideoCard key={index} video={video} />
          })
        }
      </div>
    </div>
  )
}

export default Feed