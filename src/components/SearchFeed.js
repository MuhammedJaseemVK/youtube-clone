import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
import SearchCard from './SearchCard';

function SearchFeed() {

  const { searchTerm } = useParams();
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      try{
        const response = await fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`);
        console.log(response.items);
        setSearchResult(response.items);
      }
      catch(error){
        console.error(error);
      }
    }
    fetchResult();
  }, [searchTerm])
  return (
    <div className='w-full h-full flex flex-col p-2 gap-2 bg-[#0f0f0f] mt-14'>
      {
        searchResult && searchResult.map((video, index, searchResult) => {
          return <SearchCard video={video} key={index} resolution='high' />
        })
      }
    </div>
  )
}

export default SearchFeed