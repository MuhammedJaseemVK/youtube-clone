import React from 'react';
import { Link } from 'react-router-dom';
import { decodeString } from './utils/decode';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle } from "./utils/constants";

function Videos({video}) {
  const videoTitle =video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? demoVideoTitle : video?.snippet?.title
  return (
    <Link to={video?.snippet?.thumbnails?.high?.url.includes('_live.jpg')?`${demoVideoUrl}`:`/VideoDetail/${video?.id?.videoId}`}>
      <div className='bg-[#1E1E1E] flex flex-col xl:flex-row rounded-md overflow-hidden active:bg-[#272727]'>
        <img src={video?.snippet?.thumbnails?.high?.url.includes('_live.jpg')?demoThumbnailUrl:video?.snippet?.thumbnails?.high?.url || video?.snippet?.thumbnails?.default?.url } className='aspect-video object-cover xl:w-[40%] ' alt={video?.snippet?.title} />
        <div className='p-2 text-white h-min-[200px] h-full w-full' >
          <p className='sm:text-sm text-lg'>{decodeString(videoTitle).slice(0,50)}</p>
          <p className='sm:text-base text-md text-gray-500'>{video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? demoChannelTitle : video?.snippet?.channelTitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default Videos