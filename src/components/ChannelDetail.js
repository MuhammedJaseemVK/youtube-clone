import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from './utils/fetchFromAPI';
import VideoCard from './VideoCard';
import { decodeString } from './utils/decode';

function ChannelDetail() {
  const { id } = useParams();
  const [channelData, setChannelData] = useState(null);
  const [description, setDescription] = useState(false);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {

    const fetchChannelData = async () => {
      try {
        const response = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelData(response.items[0]);
        console.log(response.items[0]);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchChannelData();

    const fetchVideoData = async () => {
      try {
        const response = await fetchFromAPI(`search?part=snippet,id&channelId=${id}`);
        setVideoData(response.items)
        console.log(response.items)
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchVideoData();

  }, [id])
  return (
    <div className='flex flex-col text-white p-3 h-full bg-[#0f0f0f]'>
      <div className='flex flex-col items-center'>
        <div className='bg-pink-500 rounded-full w-42 h-42 m-2 flex justify-center items-center overflow-hidden'>
          <img src={channelData?.snippet?.thumbnails?.default.url} alt="" />
        </div>
        <div className='flex flex-col items-center w-1/2'>
          <p className='text-md sm:text-lg font-bold'>
            {channelData?.snippet?.title}
          </p>
          <p className='text-md sm:text-lg '>
            {channelData?.snippet?.customUrl}
          </p>
          {
            channelData &&
            <div className='flex flex-col sm:flex-row items-center '>
              <p className='text-sm sm:text-lg '>
                {parseInt(channelData?.statistics?.subscriberCount).toLocaleString()} subscribers
              </p>
              <p className='text-sm sm:text-lg '>
                {parseInt(channelData?.statistics?.videoCount).toLocaleString()} videos
              </p>
            </div>
          }
          <div className='text-sm text-gray-500 px-50' onClick={() => setDescription(!description)}>
            {
              description && channelData?.snippet?.description.length > 50 ? (channelData?.snippet?.description.slice(0, 60) + '...') : channelData?.snippet?.description
            }
          </div>
        </div>
      </div>
      {
        channelData &&
        <div className='font-bold text-2xl mt-2 text-[#FF0000]'>
          {channelData?.snippet?.title}<span className='text-white'>'s videos</span>
        </div>
      }
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
        {
          videoData && videoData.map((video, index, videoData) => {
            return <VideoCard key={index} video={video} />
          })
        }
      </div>
    </div>
  )
}

export default ChannelDetail