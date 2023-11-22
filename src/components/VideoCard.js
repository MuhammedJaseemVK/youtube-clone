import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ video }) {
  return (
    <Link to={`/VideoDetail/${video?.id?.videoId}`}>
      <div className='rounded-md bg-[#1E1E1E] '>
        <img src={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} />
        <div className='p-2 text-white'>
          <p className='text-base'>{video?.snippet?.title}</p>
          <p className='text-sm text-gray-500'>{video?.snippet?.channelTitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard