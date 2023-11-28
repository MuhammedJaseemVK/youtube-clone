import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI'
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import { decodeString } from './utils/decode';

function VideoDetail() {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  const [toggleDescription, setToggleDescription] = useState(false);
  const [channelData, setChannelData] = useState(null);
  const [channelId, setChannelId] = useState('');

  const channelDescription = toggleDescription ?
    (video?.snippet?.description) :
    (video?.snippet?.description.slice(0, 100) + '...')

  useEffect(() => {
    const fetchVideoData = async () => {
      const response = await fetchFromAPI(`videos?part=snippet,contentDetails,statistics&id=${id}`);
      setVideo(response.items[0]);
      setChannelId(response?.items[0]?.snippet?.channelId)
    }
    fetchVideoData();

    const fetchRelatedVideos = async () => {
      const response = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);
      console.log(response.items)
      setRelatedVideos(response.items);
    }
    fetchRelatedVideos();
  }, [id])
  useEffect(() => {
    const fetchChannelDetails = async () => {
      const Channelresponse = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
      setChannelData(Channelresponse.items[0])
      console.log(Channelresponse.items[0])
    }
    if (channelId) {
      fetchChannelDetails();
    }
  }, [channelId])

  return (
    <div className='bg-[#0f0f0f] w-full flex flex-col sm:flex-row h-full p-2'>
      <div className=' flex flex-col sm:w-2/3 px-2 gap-4'>
        <div className='w-full sm:h-[70vh] h-[30vh] rounded-3xl overflow-hidden mt-3'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls height='100%' width='100%' />
        </div>
        <div className=' text-white p-2 gap-2'>
          <p className='text-xl sm:text-4xl font-bold'>{video?.snippet?.title}</p>
          <div className='flex gap-4 text-lg'>
            <p>{parseInt(video?.statistics?.viewCount).toLocaleString()} Views</p>
            <p>{parseInt(video?.statistics?.likeCount).toLocaleString()} Likes</p>
            <p>{parseInt(video?.statistics?.commentCount).toLocaleString()} Comments</p>
          </div>
          <Link to={`/ChannelDetail/${video?.snippet?.channelId}`} className='flex items-center'>
            <div className='rounded-full w-12 h-12 m-2 flex justify-center items-center font-bold overflow-hidden'>
              {
                channelData && <img src={channelData?.snippet?.thumbnails?.high?.url} alt="Channel logo" />
              }
            </div>
            <p className='text-lg font-bold'>
              {video?.snippet?.channelTitle}
            </p>
          </Link>
          {
            video?.snippet?.description && (
              <p className='text-md rounded-md bg-[#272727] p-2' onClick={() => setToggleDescription(!toggleDescription)}>
                {
                  decodeString(channelDescription)
                }
              </p>
            )
          }

        </div>
      </div>
      <div className='flex flex-col sm:w-1/3 gap-2 overflow-y-scroll h-screen'>
        {
          relatedVideos && relatedVideos.map((video, index, relatedVideos) => {
            return <Videos key={index} video={video} />
          })
        }
      </div>
    </div>
  )
}

export default VideoDetail