import React, { useEffect,useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'

function Feed() {
const [selectedCategory,setSelectedCategory] =useState('Home')
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q={selectedCategory}`)
    },[])
  return (
    <div></div>
  )
}

export default Feed