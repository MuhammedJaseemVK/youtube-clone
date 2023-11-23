import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
import SearchCard from './SearchCard';

function SearchFeed() {

  const { searchTerm } = useParams();
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      const response = await fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`);
      console.log(response.items)
      setSearchResult(response.items);
    }
    fetchResult();
  }, [searchTerm])
  return (
    <div className='w-full bg-violet-500 h-full flex flex-col p-2'>
      {
        searchResult && searchResult.map((video, index, searchResult) => {
          return <SearchCard video={video} key={index} resolution='high' />
        })
      }
    </div>
  )
}

export default SearchFeed