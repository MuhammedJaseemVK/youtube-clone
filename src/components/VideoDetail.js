import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI'
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';

function VideoDetail() {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  const [toggleDescription, setToggleDescription] = useState(false)
  useEffect(() => {

    const fetchVideoData = async () => {
      const response = await fetchFromAPI(`videos?part=snippet,contentDetails,statistics&id=${id}`);
      setVideo(response.items[0]);
      console.log(response.items[0])
    }
    fetchVideoData();

    const fetchRelatedVideos = async () => {
      const response = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);
      console.log(response.items)
      setRelatedVideos(response.items);
    }
    fetchRelatedVideos();

  }, [id])
  return (
    <div className='bg-[#0f0f0f] w-full flex h-full p-2'>
      <div className=' flex flex-col w-2/3 px-2 gap-4'>
        <div className='w-full h-[70vh] rounded-3xl overflow-hidden'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls height='100%' width='100%' />
        </div>
        <div className=' text-white p-2 gap-2'>
          <p className='text-4xl font-bold'>{video?.snippet?.title}</p>
          <div className='flex gap-4 text-lg'>
            <p>{parseInt(video?.statistics?.viewCount).toLocaleString()} Views</p>
            <p>{parseInt(video?.statistics?.likeCount).toLocaleString()} Likes</p>
            <p>{parseInt(video?.statistics?.commentCount).toLocaleString()} Comments</p>
          </div>
          <Link to={`/ChannelDetail/${video?.snippet?.channelId}`} className='flex items-center'>
            <div className='bg-pink-500 rounded-full w-12 h-12 m-2 flex justify-center items-center font-bold'>
              {video?.snippet?.channelTitle.charAt(0)}
            </div>
            <p className='text-lg font-bold'>
              {video?.snippet?.channelTitle}
            </p>
          </Link>
          {
            video?.snippet?.description && (
              <p className='text-md rounded-md bg-[#272727] p-2' onClick={() => setToggleDescription(!toggleDescription)}>{
                toggleDescription ? (video?.snippet?.description) :
                  (video?.snippet?.description.slice(0, 100) + '...')}
              </p>
            )
          }

        </div>
      </div>
      <div className='flex flex-col w-1/3 gap-2 overflow-y-scroll h-screen'>
        {
          relatedVideos && relatedVideos.map((video, index, relatedVideos) => {
            return <Videos key={index} video={video} resolution='medium' />
          })
        }
      </div>
    </div>
  )
}

export default VideoDetail