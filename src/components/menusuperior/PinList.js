import { useContext } from 'react'
import { MarkContext } from '../../context/MarkContext'
import './MenuSuperior.css'
import pointerIcon from '../../assets/Culture Icon.svg'

const PinList = () => {

    const { state } = useContext(MarkContext)

  return (
    <>
        {state.map((pin, index) =>(
            <div key={pin.id} className={pin.draggable ? "menu-ativo" : "menu-bottom"}>

                <img src={pointerIcon} alt="pointer-img" /> {""}
                <span>
                    Pin N°: 
                    {JSON.stringify((index + 1)).padStart(3, "0")}
                </span>

                {state.length > 0 &&
                    <div className='paragraph-row'>
                        <p className='bottom-paragraph'>Criado em: 
                        {
                        (pin.date).getDate() + "/" +  
                        ((pin.date).getMonth() < 10 ? "0" + (pin.date).getMonth() : (pin.date).getMonth()) + "/" + 
                        (pin.date).getFullYear() + " - " + 
                        (pin.date).getHours() + ":" + 
                        (pin.date).getMinutes()} </p> 
                    </div>
                }
            </div>
        ))}
    </>
  )
}

export default PinList