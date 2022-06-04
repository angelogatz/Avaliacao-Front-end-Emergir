import { useContext } from 'react'
import { MarkerContext } from '../../context/markerContext'
import PinList from './PinList'
import './MenuSuperior.css'

const MenuSuperior = () => {

  const { state } = useContext(MarkerContext)

  return (
    <>
      <div className="menu-sup">
      <div className="menu-top"><h2>Listagem de pontos</h2></div>
          <div className='menu-sup-container'>
              
              {state.length > 0 ? 
                (<PinList />) : 
                (<p 
                  style={{
                    fontFamily: 'Inter',
                    textAlign: 'center',
                    width: '60%',
                    margin: "5px auto 5px",
                    fontSize: "14px"}}>
                    Sem pontos de monitoramento para exibir no momento.
                </p>)}
          </div>
      </div>
    </>
  )
}

export default MenuSuperior