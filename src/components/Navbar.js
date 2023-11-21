import React from 'react'
import { FaYoutube, FaMoon } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useState } from "react";

function Navbar() {
    const [showSidebar, setShowsidebar] = useState(false);
    return (
        <div className='w-full bg-slate-900 p-4 flex justify-between items-center text-white'>
            <div className='flex gap-3 items-center'>
                <GiHamburgerMenu className='btn-menu' onClick={() => setShowsidebar(!showSidebar)} />
                {
                    showSidebar &&
                    <div className='absolute top-0 left-0 z-10 h-full w-1/6 bg-slate-700 shadow-xl'>
                        <div className='flex flex-col gap-2 h-full p-4'>
                            <div className='flex gap-3 items-center'>
                                <GiHamburgerMenu className='btn-menu' onClick={() => setShowsidebar(!showSidebar)} />
                                <Link to='/' className='flex gap-2 items-center'>
                                    <FaYoutube size={30} className='text-[#FF0000]' />
                                    <p className='font-bold'>YouTube</p>
                                </Link>
                            </div>
                            <p className='btn'>Home</p>
                            <p className='btn'>Trending</p>
                            <p className='btn'>Music</p>
                        </div>
                    </div>
                }
                <Link to='/' className='flex gap-2 items-center'>
                    <FaYoutube size={30} className='text-[#FF0000]' />
                    <p className='font-bold'>YouTube</p>
                </Link>
            </div>
            <div className='flex justify-between items-center rounded-xl'>
                <input type="text" id="searchBox" className='rounded-l-xl px-2 bg-transparent border' placeholder='Search' />
                <IoSearchOutline size={30} className='bg-slate-800 w-fit border rounded-r-xl text-white px-2 py-1' />
            </div>
            <FaMoon size={20} />
        </div>
    )
}

export default Navbar