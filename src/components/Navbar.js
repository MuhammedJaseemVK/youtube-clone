import React, { useContext } from 'react'
import { FaYoutube, FaMoon } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SidebarContext } from './context/SidebarContext';
import Searchbar from './Searchbar';

function Navbar() {
    const [showSidebar, setShowsidebar] = useContext(SidebarContext);
    return (
        <div className='fixed top-0 w-full bg-slate-900 p-4 flex justify-between items-center text-white'>
            <div className='flex gap-3 items-center'>
                <GiHamburgerMenu className='btn-menu' onClick={() => setShowsidebar(!showSidebar)} />
                {
                    showSidebar &&
                    <Sidebar />
                }
                <Link to='/' className='flex gap-2 items-center'>
                    <FaYoutube size={30} className='text-[#FF0000]' />
                    <p className='font-bold'>YouTube</p>
                </Link>
            </div>
            <Searchbar />
            <FaMoon size={20} />
        </div>
    )
}

export default Navbar