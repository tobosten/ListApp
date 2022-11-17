import React, { createContext, useState } from "react";

export const ListFormatMode = createContext(null)


export const ProjectContext = ({ children }) => {

    const [formatSelected, setFormatSelected] = useState(null)

    return (
        <ListFormatMode.Provider value={{ formatSelected, setFormatSelected }}>
            {children}
        </ListFormatMode.Provider>
    )
}