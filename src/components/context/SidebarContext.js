import React, { useState } from 'react'

export const SidebarContext = React.createContext();

function SidebarProvider({ children }) {
    const [showSidebar, setShowsidebar] = useState(false);

    return (
        <SidebarContext.Provider value={[showSidebar, setShowsidebar]} >
            {children}
        </SidebarContext.Provider >
    )
}

export default SidebarProvider