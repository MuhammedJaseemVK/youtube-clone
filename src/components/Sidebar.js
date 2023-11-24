import React, { useContext } from 'react'
import { FaYoutube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarContext } from './context/SidebarContext';
import { Link } from "react-router-dom";
import { categories } from './utils/constants';

function Sidebar() {

    const handleClick = (e) => {
        setSelectedCategory(e.target.value);
        console.log(e.target)
        setShowsidebar(!showSidebar)
    }

    const [showSidebar, setShowsidebar, selectedCategory, setSelectedCategory] = useContext(SidebarContext);
    return (
        <div className='fixed top-0 left-0 z-10 w-full h-full flex justify-between'>
            <div className='h-full w-1/6 bg-[#0f0f0f] shadow-xl'>
                <div className='flex flex-col gap-2 h-full p-4'>
                    <div className='flex gap-3 items-center'>
                        <GiHamburgerMenu className='btn-menu' onClick={() => setShowsidebar(!showSidebar)} />
                        <Link to='/' className='flex gap-2 items-center'>
                            <FaYoutube size={30} className='text-[#FF0000]' />
                            <p className='font-bold'>YouTube</p>
                        </Link>
                    </div>
                    {
                        categories.map((category, index, categories) => (
                            <button className='btn flex items-center gap-2 text-lg' value={category.name} onClick={handleClick} key={category.name} >
                                <span>{category.icon}</span>
                                {category.name}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className='bg-black/80 w-5/6 h-full' onClick={() => setShowsidebar(!showSidebar)}>
            </div>
        </div>
    )
}

export default Sidebar