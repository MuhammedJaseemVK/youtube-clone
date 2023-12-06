import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI'
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import { decodeString } from './utils/decode';
import PlaylistVideoCard from "./PlaylistVideoCard"

function Playlist() {
    const [videoId, setVideoId] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const { id } = useParams();
    const [toggleDescription, setToggleDescription] = useState(false);
    const [channelData, setChannelData] = useState(null);
    const [channelId, setChannelId] = useState('');
    const [channelName, setChannelName] = useState(null);
    const [playlistVideos, setPlaylistVideos] = useState(null);
    const [playlistTitle, setPlaylistTitle] = useState(null);

    const channelDescription = toggleDescription ?
        (videoData?.snippet?.description) :
        (videoData?.snippet?.description.slice(0, 100) + '...')

    useEffect(() => {
        const fetchPlaylistVideos = async () => {
            try {
                const res = await fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`);
                setPlaylistVideos(res.items);
                setVideoId(res.items[0].snippet.resourceId.videoId);
                setPlaylistTitle(res.items[0].snippet.title);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchPlaylistVideos();

    }, []);

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await fetchFromAPI(`videos?part=snippet,contentDetails,statistics&id=${videoId}`);
                setVideoData(response.items[0]);
                setChannelId(response?.items[0]?.snippet?.channelId);
                setChannelName(response?.items[0]?.snippet?.channelTitle)
            }
            catch (error) {
                console.error(error);
            }
        }
        if (videoId) {
            fetchVideoData();
        }
    }, [videoId])

    useEffect(() => {
        const fetchChannelDetails = async () => {
          try {
            const Channelresponse = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
            setChannelData(Channelresponse.items[0]);
            console.log(Channelresponse.items[0]);
          }
          catch (error) {
            console.error(error);
          }
        }
        if (channelId) {
          fetchChannelDetails();
        }
      }, [channelId])


    const handleVideoChange = (id) => {
        setVideoId(id);
    }

    return (
        <div className='bg-[#0f0f0f] w-full flex flex-col sm:flex-row h-full p-2'>
            <div className=' flex flex-col sm:w-2/3 px-2 gap-4'>
                <div className='aspect-video rounded-3xl overflow-hidden mt-3'>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls height='100%' width='100%' />
                </div>
                <div className=' text-white p-2 gap-2'>
                    <p className='text-xl sm:text-4xl font-bold'>{videoData?.snippet?.title}</p>
                    {
                        videoData && (
                            <div className='flex gap-4 text-lg'>
                                <p>{parseInt(videoData?.statistics?.viewCount).toLocaleString()} Views</p>
                                <p>{parseInt(videoData?.statistics?.likeCount).toLocaleString()} Likes</p>
                                <p>{parseInt(videoData?.statistics?.commentCount).toLocaleString()} Comments</p>
                            </div>)
                    }
                    <Link to={`/ChannelDetail/${channelId}`} className='flex items-center'>
                        <div className='rounded-full w-12 h-12 m-2 flex justify-center items-center font-bold overflow-hidden'>
                            {
                                channelData && <img src={channelData?.snippet?.thumbnails?.high?.url} alt="Channel logo" />
                            }
                        </div>
                        <p className='text-lg font-bold'>
                            {channelName}
                        </p>
                    </Link>
                    {
                        videoData?.snippet?.description && (
                            <p className='text-md rounded-md bg-[#272727] p-2 whitespace-pre-wrap' onClick={() => setToggleDescription(!toggleDescription)}>
                                {
                                    decodeString(channelDescription)
                                }
                            </p>
                        )
                    }

                </div>
            </div>
            <div className='flex flex-col sm:w-1/3 gap-2 overflow-y-scroll h-screen mt-[12px]'>
                {
                    playlistTitle && (
                        <div className='bg-[#272727] text-white rounded-md p-2 flex flex-col'>
                            <p className='font-bold'>{playlistTitle}</p>
                            <p>{playlistVideos?.length} videos</p>
                        </div>
                    )
                }
                {
                    playlistVideos && playlistVideos.map((video, index, relatedVideos) => {
                        return <PlaylistVideoCard key={video?.id} video={video} handleVideoChange={handleVideoChange} />
                    })
                }
            </div>
        </div>
    )
}

export default Playlist