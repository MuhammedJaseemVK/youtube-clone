import React from 'react';
import { Link } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants";

function Videos({video}) {
  return (
    <Link to={`/VideoDetail/${video?.id?.videoId}`}>
      <div className='bg-[#1E1E1E] flex rounded-md overflow-hidden'>
        <img src={video?.snippet?.thumbnails?.medium?.url || demoThumbnailUrl} className='w-[270px] h-[120px] ' alt={video?.snippet?.title} />
        <div className='p-2 text-white h-fit w-full' >
          <p className='text-xl'>{video?.snippet?.title.slice(0,40)+'...'}</p>
          <p className='text-lg text-gray-500'>{video?.snippet?.channelTitle.slice(0,20)+'...'}</p>
        </div>
      </div>
    </Link>
  )
}

export default Videos