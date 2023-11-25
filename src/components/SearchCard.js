import React from 'react';
import { Link } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants";

function SearchCard({ video }) {
  return (
    <Link to={`/VideoDetail/${video?.id?.videoId}`} className='w-full'>
      <div className='bg-[#0f0f0f] flex flex-col md:flex-row w-full overflow-hidden active:bg-[#272727] rounded-md'>
        <div >
          <img src={video?.snippet?.thumbnails?.medium?.url || demoThumbnailUrl } className='w-full md:w-fit'  alt={video?.snippet?.title} />
        </div>
        <div className='p-2 text-white' >
          <p className='text-md sm:text-2xl overflow-hidden'>{video?.snippet?.title.slice(0, 50)}</p>
          <p className='text-sm sm:text-xl text-gray-500'>{video?.snippet?.channelTitle.slice(0, 20)}</p>
          <p className='text-base sm:text-lg text-gray-500'>{video?.snippet?.description.slice(0, 20) + '...'}</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchCard