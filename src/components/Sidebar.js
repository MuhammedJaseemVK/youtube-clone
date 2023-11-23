import React, { useContext } from 'react'
import { FaYoutube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarContext } from './context/SidebarContext';
import { Link, NavLink } from "react-router-dom";

function Sidebar() {

    const handleClick =(e)=>{
        setSelectedCategory(e.target.value);
        setShowsidebar(!showSidebar)
    }

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
                    <button className='btn' onClick={handleClick} value="Home" >Home</button>
                    <button className='btn' onClick={handleClick} value="Trending" >Trending</button>
                    <button className='btn' onClick={handleClick} value="Music" >Music</button>
                    <button className='btn' onClick={handleClick} value="Movies" >Movies</button>
                    <button className='btn' onClick={handleClick} value="Animated" >Animated</button>
                    <button className='btn' onClick={handleClick} value="India">India</button>
                    <button className='btn' onClick={handleClick} value="Hollywood">Hollywood</button>
                </div>
            </div>
            <div className='bg-black/80 w-5/6 h-full' onClick={() => setShowsidebar(!showSidebar)}>
            </div>
        </div>
    )
}

export default Sidebar