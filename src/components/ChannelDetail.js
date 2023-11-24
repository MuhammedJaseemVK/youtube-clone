import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from './utils/fetchFromAPI';
import VideoCard from './VideoCard';

function ChannelDetail() {
  const { id } = useParams();
  const [channelData, setChannelData] = useState(null);
  const [description, setDescription] = useState(false);
  const [videoData,setVideoData] =useState(null);
  useEffect(() => {
    const fetchChannelData = async () => {
      const response = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelData(response.items[0])
      console.log(response.items[0])
    }
    fetchChannelData();

    const fetchVideoData =async()=>{
      const response= await fetchFromAPI(`search?part=snippet,id&channelId=${id}`);
      setVideoData(response.items)
      console.log(response.items)
    }
    fetchVideoData();

  }, [id])
  return (
    <div className='flex flex-col text-white p-3'>
      <div className='flex flex-col items-center'>
        <div className='bg-pink-500 rounded-full w-42 h-42 m-2 flex justify-center items-center overflow-hidden'>
          <img src={channelData?.snippet?.thumbnails?.default.url} alt="" />
        </div>
        <div className='flex flex-col items-center w-1/2'>
          <p className='text-lg font-bold'>
            {channelData?.snippet?.title}
          </p>
          <p className='text-lg font-bold'>
            {channelData?.snippet?.customUrl}
          </p>
          <div className='flex gap-2'>
            <p className='text-lg font-bold'>
              {parseInt(channelData?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </p>
            <p className='text-lg font-bold'>
            {parseInt(channelData?.statistics?.videoCount).toLocaleString()} videos
            </p>
          </div>
          <div className='text-sm text-gray-500 px-50' onClick={() => setDescription(!description)}>
            {
              description && channelData?.snippet?.description.length > 50 ? (channelData?.snippet?.description.slice(0, 60) + '...') : channelData?.snippet?.description}
          </div>
        </div>
      </div>
      <div className='font-bold text-2xl'>
      {channelData?.snippet?.title}'s videos
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {
          videoData && videoData.map((video,index,videoData)=>{
            return <VideoCard key={index} video={video} />
          })
        }
      </div>
    </div>
  )
}

export default ChannelDetail