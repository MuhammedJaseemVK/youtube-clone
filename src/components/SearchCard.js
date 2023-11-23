import React from 'react';
import { Link } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants";

function SearchCard({ video }) {
  return (
    <Link to={`/VideoDetail/${video?.id?.videoId}`}>
      <div className='bg-[#1E1E1E] flex w-full overflow-hidden'>
        <div >
          <img src={video?.snippet?.thumbnails?.medium?.url || demoThumbnailUrl }  alt={video?.snippet?.title} />
        </div>
        <div className='p-2 text-white w-full' >
          <p className='text-2xl overflow-hidden'>{video?.snippet?.title.slice(0, 50)}</p>
          <p className='text-xl text-gray-500'>{video?.snippet?.channelTitle.slice(0, 20)}</p>
          <p className='text-sm text-gray-500'>{video?.snippet?.description.slice(0, 20) + '...'}</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchCard