import React from 'react';
import { Link } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants";

function VideoCard({ video }) {
  return (
    <Link to={`/VideoDetail/${video?.id?.videoId}`}>
      <div className='rounded-md bg-[#1E1E1E]'>
        {/* includes _live means image fetching error */}
        <img src={video?.snippet?.thumbnails?.high?.url.includes('_live.jpg')?demoThumbnailUrl:video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} className='object-cover h-[208px] w-full' />
        <div className='p-2 text-white h-[100px]'>
          <p className='text-base'>{video?.snippet?.thumbnails?.high?.url.includes('_live.jpg')?demoVideoTitle:video?.snippet?.title}</p>
          {/* <Link to={`/VideoDetail/${video?.id?.videoId}`}> */}
            <p className='text-sm text-gray-500'>{video?.snippet?.thumbnails?.high?.url.includes('_live.jpg')?demoChannelTitle:video?.snippet?.channelTitle}</p>
          {/* </Link> */}
        </div>
      </div>
    </Link>
  )
}

export default VideoCard