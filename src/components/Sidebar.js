import React, { useContext } from 'react'
import { FaMoon, FaYoutube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarContext } from './context/SidebarContext';
import { Link } from "react-router-dom";
import { categories } from './utils/constants';

function Sidebar({showSidebar,setShowSidebar}) {

    const handleClick = (e) => {
        setSelectedCategory(e.target.value);
        console.log(e.target)
        setShowSidebar(!showSidebar)
    }

    const [selectedCategory, setSelectedCategory] = useContext(SidebarContext);
    return (
        <div className='fixed top-0 left-0 z-10 w-full h-full flex justify-between'>
            <div className='h-full w-fit  bg-[#0f0f0f] shadow-xl'>
                <div className='flex flex-col gap-2 h-full p-4'>
                    <div className='flex gap-2 items-center'>
                        <GiHamburgerMenu className='btn-menu' onClick={() => setShowSidebar(!showSidebar)} />
                        <Link to='/' className='flex gap-2 items-center'>
                            <FaYoutube size={30} className='text-[#FF0000]' />
                            <p className='font-bold'>YouTube</p>
                        </Link>
                    </div>
                    <div className='flex flex-col overflow-y-auto items-start'>
                        {

                            categories.map((category, index, categories) => (
                                <button className='btn flex items-center gap-2 text-lg w-full' value={category.name} onClick={handleClick} key={category.name} >
                                    <span>{category.icon}</span>
                                    {category.name}
                                </button>
                            ))
                        }
                        
                        <button className='btn w-full flex items-center gap-2 text-lg sm:hidden ' >
                            <span><FaMoon size={20} className=' text-white' /></span>
                            Light Mode
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-black/80 w-full h-full' onClick={() => setShowSidebar(!showSidebar)}>
            </div>
        </div>
    )
}

export default Sidebar