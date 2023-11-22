import React from 'react'
import VideoCard from './VideoCard'
import { useParams } from 'react-router-dom'

function VideoDetail() {
  const {videoId} =useParams()
  return (
    <div className='bg-yellow-500 w-full flex h-full p-2'>
      <div className='bg-pink-500 w-2/3 h-2/3'>
        <div className='w-full bg-red-500 h-full'>
          <video className='w-full h-full'controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='bg-white'>
          <p>Video Title</p>
          <p>Channel name</p>
        </div>
      </div>
      <div className='flex flex-col w-1/3 gap-2 p-2'>
        <VideoCard />
        <VideoCard />
        <VideoCard />

      </div>

    </div>
  )
}

export default VideoDetail