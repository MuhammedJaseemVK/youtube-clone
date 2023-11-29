import React, { useState } from 'react'
import { FaYoutube, FaMoon } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';

function Navbar() {
    const [showSidebar, setShowsidebar] = useState(false);
    return (
        <div className='fixed top-0 w-full bg-[#0f0f0f] p-4 flex justify-between items-center text-white'>
            <div className='flex gap-1 items-center'>
                <GiHamburgerMenu className='btn-menu' onClick={() => setShowsidebar(!showSidebar)} />
                {
                    showSidebar &&
                    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowsidebar} />
                }
                <Link to='/' className='flex gap-2 items-center'>
                    <FaYoutube size={30} className='text-[#FF0000]' />
                    <p className='font-bold hidden sm:block'>YouTube</p>
                </Link>
            </div>
            <Searchbar className=' w-full'/>
            <FaMoon size={20} className='hidden sm:block w-fit' />
        </div>
    )
}

export default Navbar