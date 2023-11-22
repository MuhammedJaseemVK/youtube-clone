import React, { useContext } from 'react'
import { FaYoutube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarContext } from './context/SidebarContext';
import { Link } from "react-router-dom";

function Sidebar() {
    const [showSidebar, setShowsidebar,selectedCategory,setSelectedCategory] = useContext(SidebarContext);
    return (
        <div className='absolute top-0 left-0 z-10 w-full h-full flex justify-between'>
            <div className='h-full w-1/6 bg-slate-700 shadow-xl'>
                <div className='flex flex-col gap-2 h-full p-4'>
                    <div className='flex gap-3 items-center'>
                        <GiHamburgerMenu className='btn-menu' onClick={() => setShowsidebar(!showSidebar)} />
                        <Link to='/' className='flex gap-2 items-center'>
                            <FaYoutube size={30} className='text-[#FF0000]' />
                            <p className='font-bold'>YouTube</p>
                        </Link>
                    </div>
                    <p className='btn' onClick={()=>setSelectedCategory('Home')}>Home</p>
                    <p className='btn' onClick={()=>setSelectedCategory('Trending')}>Trending</p>
                    <p className='btn' onClick={()=>setSelectedCategory('Music')}>Music</p>
                </div>
            </div>
            <div className='bg-black/80 w-5/6 h-full' onClick={() => setShowsidebar(!showSidebar)}>
            </div>
        </div>
    )
}

export default Sidebar