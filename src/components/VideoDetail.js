import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI'
import ReactPlayer from 'react-player/youtube'

function VideoDetail() {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  const [toggleDescription, setToggleDescription] = useState(false)
  useEffect(() => {

    const fetchVideoData = async () => {
      const response = await fetchFromAPI(`videos/?part=snippet,contentDetails,statistics&id=${id}`);
      setVideo(response.items[0]);
      console.log(response.items[0])
    }
    fetchVideoData();

    const fetchRelatedVideos = async () => {
      const response = await fetchFromAPI(`search/?part=snippet&relatedToVideoId=${id}&type=video`);
      console.log(response.items)
      setRelatedVideos(response.items);
    }
    fetchRelatedVideos();

  }, [id])
  return (
    <div className='bg-yellow-500 w-full flex h-full p-2'>
      <div className='bg-violet-500 flex flex-col w-2/3 h-full'>
        <div className='bg-pink-500 w-full h-2/3'>
          <ReactPlayer className='w-full h-full' url={`https://www.youtube.com/watch?v=${id}`} controls />
        </div>
        <div className='bg-gray-500 text-white p-2'>
          <p className='text-4xl font-bold'>{video?.snippet?.title}</p>
          <div className='flex gap-4 text-lg'>
            <p>{video?.statistics?.viewCount} Views</p>
            <p>{video?.statistics?.likeCount} Likes</p>
            <p>{video?.statistics?.commentCount} Comments</p>
          </div>
          {
            video?.snippet?.description && (
              <p className='text-base rounded-md bg-gray-700 p-2' onClick={() => setToggleDescription(!toggleDescription)}>{
                toggleDescription ? (video?.snippet?.description) :
                  (video?.snippet?.description.slice(0, 100) + '...')}
              </p>
            )
          }

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