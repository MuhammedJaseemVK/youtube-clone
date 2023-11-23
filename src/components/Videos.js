import React from 'react';
import { Link } from 'react-router-dom';

function Videos({video}) {
  return (
    <Link to={`/VideoDetail/${video?.id?.videoId}`}>
      <div className='bg-[#1E1E1E] flex'>
        <img src={video?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} />
        <div className='p-2 text-white h-[140px] mt-2'>
          <p className='text-2xl'>{video?.snippet?.title}</p>
          <p className='text-xl text-gray-500'>{video?.snippet?.channelTitle}</p>
          <p className='text-sm text-gray-500'>{video?.snippet?.description.slice(0,60)+'...'}</p>
        </div>
      </div>
    </Link>
  )
}

export default Videos