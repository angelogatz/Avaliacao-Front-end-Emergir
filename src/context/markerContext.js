import { createContext, useReducer } from "react";

function markerReducer(state, action) {
    switch (action.type){
        case "ADD": 
            return [...state, action.payload]
        case "REMOVE":
            return state.filter(element => 
                !element.draggable
            )
        // case "MODIFY":
        //     state.map(pin => {
        //         pin.lat = (pin.lat = action.payload[0])
        //         pin.lng = (pin.lat = action.payload[1])
                
        //     })
        //     return [...state]
        case "REMOVE_ALL":
            return []
        case "DRAGGABLE": 
            state.forEach(pin => {pin.draggable = (pin.id === action.payload)
            })
            return [...state]
        case "REMOVE_DRAGGABLE":
            state.forEach(pin => {pin.draggable = false ? pin.draggable = (pin.id === action.payload) : null})
            return [...state]
        default:
            return state
    }
}

export const MarkerContext = createContext()

let initial = []

export const MarkerContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(markerReducer, initial)

    return (
        <MarkerContext.Provider value={{ state, dispatch}}>
            {children}
        </MarkerContext.Provider>
    )
}