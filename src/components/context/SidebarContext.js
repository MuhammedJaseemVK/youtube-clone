import React, { useState } from 'react'

export const SidebarContext = React.createContext();

function SidebarProvider({ children }) {
    const [showSidebar, setShowsidebar] = useState(false);
    const [selectedCategory,setSelectedCategory]=useState('New');

    return (
        <SidebarContext.Provider value={[showSidebar, setShowsidebar,selectedCategory,setSelectedCategory]} >
            {children}
        </SidebarContext.Provider >
    )
}

export default SidebarProvider