import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
import Videos from './Videos';

function SearchFeed() {

  const { searchTerm } = useParams();
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      const response = await fetchFromAPI(`search?part=snippet,idt&q=${searchTerm}}`);
      console.log(response.items)
      setSearchResult(response.items);
    }
    fetchResult();
  }, [searchTerm])
  return (
    <div className='w-full bg-violet-500 h-full flex flex-col justify-start items-center p-2'>
      <div className='w-2/3'>
        {
          searchResult && searchResult.map((video, index, searchResult) => {
            return <Videos video={video} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default SearchFeed