import React from 'react'
import { FaYoutube, FaUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
    return (
        <div className='w-full bg-slate-900 p-4 flex justify-between items-center text-white'>
            <div className='flex gap-2'>
                <FaYoutube size={30} className='text-[#FF0000]' />
                <p className='font-bold'>YouTube</p>
            </div>
            <div className='flex justify-between items-center rounded-xl '>
                <input type="text" className='rounded-l-xl px-2 bg-transparent border' placeholder='Search' />
                <IoSearchOutline size={30} className='bg-slate-800 w-fit rounded-r-xl text-white px-2 py-1' />
            </div>
            <FaUser />
        </div>
    )
}

export default Navbar