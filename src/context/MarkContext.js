import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid'
import { StateRemovePointer } from "../utils/StateRemovePointer";

function markerReducer(state, action) {
    switch (action.type){
        case "add": 
            return [...state, action.payload]




        case "remove":
            return state.map((element) => {
                let id = element.id
                return StateRemovePointer(state, id)
            })

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

    // console.log(state)

    return (
        <MarkContext.Provider value={{ state, dispatch}}>
            {children}
        </MarkContext.Provider>
    )
}