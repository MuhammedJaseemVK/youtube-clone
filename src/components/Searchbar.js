import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
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
                <input type="text" id="searchBox" name="searchBox" className='rounded-l-xl px-2 bg-[#0f0f0f] border active:bg-[#272727] focus:outline-none w-full' placeholder='Search' value={searchTerm} onChange={handleChange} />
                <button type='Submit'>
                    <CiSearch size={32} className='bg-slate-800 w-fit border rounded-r-xl text-white px-2 py-1' />
                </button>
            </form>
        </div>
    )
}

export default Searchbar