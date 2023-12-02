import React, { useContext, useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { SidebarContext } from './context/SidebarContext'
import VideoCard from './VideoCard';
import LoadingBar from 'react-top-loading-bar';

function Feed() {
  const [searchResult, setSearchResult] = useState(null);
  const [selectedCategory, setSelectedCategory] = useContext(SidebarContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProgress(60);
        const response = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
        setProgress(80);
        setSearchResult(response.items)
        setProgress(100);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [selectedCategory]);

  return (
    <div className='w-full bg-[#0f0f0f] h-full p-2'>
      <LoadingBar
        color='#FF0000'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='font-bold text-2xl sm:text-4xl text-[#FF0000] p-2'>
        {selectedCategory} <span className='text-white'>videos</span>
      </div>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4' >
        {
          searchResult && searchResult.map((video, index, searchResult) => {
            return <VideoCard key={video?.id?.videoId || video?.id?.channelId || video?.id?.playlistId} video={video} />
          })
        }
      </div>
    </div>
  )
}

export default Feed