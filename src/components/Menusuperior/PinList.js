import { useContext } from 'react'
import { MarkerContext } from '../../context/markerContext'
import './MenuSuperior.css'
import pointerIcon from '../../assets/Culture Icon.svg'

const PinList = () => {

    const { state, dispatch } = useContext(MarkerContext)

    const handlePointer = (id) => {
        dispatch({type: "DRAGGABLE", payload: id})
    }

  return (
    <>
        {state.map((pin, index) =>(
            <div key={pin.id} onClick={() => handlePointer(pin.id)} className={pin.draggable ? "menu-ativo" : "menu-bottom"}>

                <img src={pointerIcon} alt="pointer-img" /> {""}
                <span>
                    Pin N°: 
                    {JSON.stringify((index + 1)).padStart(3, "0")}
                </span>

                <div className='paragraph-row'>
                    <p className='bottom-paragraph'>Criado em: 
                    {
                    (pin.date).getDate() + "/" +  
                    ((pin.date).getMonth() < 10 ? "0" + (pin.date).getMonth() : (pin.date).getMonth()) + "/" + 
                    (pin.date).getFullYear() + " - " + 
                    ((pin.date).getHours() < 10 ? "0" + (pin.date).getHours() : (pin.date).getHours()) + ":" + 
                    ((pin.date).getMinutes() < 10 ? "0" + (pin.date).getMinutes() : (pin.date).getMinutes())} </p> 
                </div>
            </div>
        ))}
    </>
  )
}

export default PinList