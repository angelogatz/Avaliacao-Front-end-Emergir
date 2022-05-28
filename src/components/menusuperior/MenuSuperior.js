import { useContext } from 'react'
import { MarkContext } from '../../context/MarkContext'
import PinList from './PinList'
import './MenuSuperior.css'


const MenuSuperior = () => {

    const { state } = useContext(MarkContext)

    const arrPin = []

    state.forEach((pin, index) => {
        arrPin.push(pin.date)
    })

    

  return (
    <>
        
            <div className="menu-sup">
                <div className='menu-sup-container'>
                    <div className="menu-top"><h2>Listagem de pontos</h2></div>
                    {state.length > 0 ? (<PinList />) : (<p style={{padding: "9px", fontFamily: 'Inter', textAlign: 'center', width: '80%', margin: "0 auto", marginTop: '22px'}}>Sem pontos de monitoramento para exibir no momento</p>)}
                </div>
            </div>
        
    </>
  )
}

export default MenuSuperior