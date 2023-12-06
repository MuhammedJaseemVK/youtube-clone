import React, { useState } from 'react'

export const SidebarContext = React.createContext();

function SidebarProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState('New');

    return (
        <SidebarContext.Provider value={[selectedCategory, setSelectedCategory]} >
            {children}
        </SidebarContext.Provider >
    )
}

export default SidebarProvider