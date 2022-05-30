import { createContext, useReducer } from "react";
import { StateRemovePointer } from "../utils/StateRemovePointer";

function markerReducer(state, action) {
    switch (action.type){
        case "add": 
            return [...state, action.payload]




        case "remove":
            return StateRemovePointer(state)
          

        case "removeAll":
            return []
        case "draggable": 
            return state.map((element) => {
                element.draggable = false
                if(element.id === action.payload){
                    
                    

                    element.draggable = true
                }
            return element
        })
        default:
            return state
    }
}

export const MarkContext = createContext()

let initial = []

export const MarkContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(markerReducer, initial)

    return (
        <MarkContext.Provider value={{ state, dispatch}}>
            {children}
        </MarkContext.Provider>
    )
}