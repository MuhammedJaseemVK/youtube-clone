import React, { useContext, useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { SidebarContext } from './context/SidebarContext'
import VideoCard from './VideoCard';

function Feed() {
  const [searchResult, setSearchResult] = useState(null);
  const [, , selectedCategory, setSelectedCategory] = useContext(SidebarContext)
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        setSearchResult(response.items)
      }
      catch(error){
        console.error(error);
      }
    }
    fetchData();
  }, [selectedCategory])
  return (
    <div className='w-full bg-[#0f0f0f] h-full p-2'>
      <div className='font-bold text-2xl sm:text-4xl text-[#FF0000] p-2'>
        {selectedCategory} <span className='text-white'>videos</span>
      </div>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4' >
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