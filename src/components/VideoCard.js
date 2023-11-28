import React from 'react';
import { Link } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants";
import { decodeString } from './utils/decode';

function VideoCard({ video }) {
  const videoTitle = video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? demoVideoTitle : video?.snippet?.title;
  const isVideo = video?.id?.kind === "youtube#video";
  return (
    <>
      {
        isVideo ? (
          <Link to={video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? `${demoVideoUrl}` : `/VideoDetail/${video?.id?.videoId}`}
            className="flex flex-col gap-2 h-full"
          >
            <img
              src={video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? demoThumbnailUrl : video?.snippet?.thumbnails?.high?.url || video?.snippet?.thumbnails?.default?.url}
              className={'h-[52%] object-cover'}
            />
            <div className="flex flex-col gap-2 text-white h-[110px]">
              <p className='text-base'>{decodeString(videoTitle)}</p>
              <p className='text-sm text-gray-500'>{video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? demoChannelTitle : video?.snippet?.channelTitle}</p>

            </div>
          </Link>
        )
          :
          <Link to={video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? `${demoChannelUrl}` : `/ChannelDetail/${video?.id?.channelId}`}
            className="flex flex-col gap-2 h-full items-center"
          >
            <div className='rounded-full overflow-hidden'>
              <img
                src={video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? demoThumbnailUrl : video?.snippet?.thumbnails?.high?.url}
                className={'h-[205px] w-[205px]'}
                />
                </div>
            <div className="flex flex-col gap-2 text-white">
              <p className='text-sm text-gray-500'>{video?.snippet?.thumbnails?.high?.url.includes('_live.jpg') ? demoChannelTitle : video?.snippet?.channelTitle}</p>
            </div>
          </Link>
      }
    </>
  )
}

export default VideoCard