import { useContext, useState } from "react"
import { MarkerContext } from "../../context/markerContext"
import { v4 as uuidv4 } from 'uuid'
import './MenuInferior.css'
import trash from '../../assets/Trash.svg'
import pointer from '../../assets/Pin.svg'
import { ModalContext } from "../../context/modalContext"

const MARKER_POSITION = {
  lat: -15.18,
  lng: -53.5845
}

const MenuInferior = () => {

  const { setButtonSelect, setShowText } = useContext(ModalContext)

  const { dispatch, state } = useContext(MarkerContext)

  const pointerSelected = state.find((pin) => pin.draggable)

  const handleAdd = () => {
    dispatch({type: "ADD", payload: {...MARKER_POSITION, id: uuidv4(), draggable: false, date: new Date()}})
  }

  const handleRemove = () => {
    setShowText("remove")
    setButtonSelect(true)
  }

  const handleRemoveAll = () => {
    setShowText("removeAll")
    setButtonSelect(true)
  }

  return (
    <>
      <div className="menu-inf">

        <div className="menu-inf-container">
            {pointerSelected ? 
              <button 
                className="btn btn-fade-in" 
                value={false} 
                onClick={() => handleRemove()}> Deletar Pin 
                <img src={trash} alt="trashImage"/> 
              </button> : 
            ""}
        </div>

        <div className="menu-inf-container">
            <button className="btn" onClick={handleAdd}>Adicionar novo <img src={pointer} alt="pinImage"/></button>
        </div>
    
        <div className="menu-inf-container">
            {state.length > 0 ? 
              (<button 
                className="btn btn-danger" 
                onClick={handleRemoveAll}> Deletar todos 
                <img src={trash} alt="trashImage"/>
              </button>) : 
            ""}
        </div>
      </div>

    </>
  )
}

export default MenuInferior