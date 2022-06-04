import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {

    const [ buttonSelect, setButtonSelect ] = useState(null)
    const [ showText, setShowText ] = useState(null)

    return(
        <ModalContext.Provider value={{ buttonSelect, setButtonSelect, showText, setShowText }}>
            {children}
        </ModalContext.Provider>
    )
}