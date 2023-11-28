import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Searchbar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            // setSearchTerm('');
            navigate(`/SearchFeed/${searchTerm}`);
        }

    }

    return (
        <div>
            <form onSubmit={handleSearch} className='flex justify-between items-center rounded-xl '>
                <input type="text" id="searchBox" name="searchBox" className='rounded-l-xl px-2 bg-transparent border w-full' placeholder='Search' value={searchTerm} onChange={handleChange} />
                <button type='Submit'>
                    <IoSearchOutline size={30} className='bg-slate-800 w-fit border rounded-r-xl text-white px-2 py-1' />
                </button>
            </form>
        </div>
    )
}

export default Searchbar