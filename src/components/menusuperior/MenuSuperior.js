import { useContext } from 'react'
import { MarkContext } from '../../context/MarkContext'
import './MenuSuperior.css'

const MenuSuperior = () => {

    const { dispatch, state } = useContext(MarkContext)

  return (
    <>
        <div className="menu-sup">
            <div className="menu-sup-container">
                <div className="menu-top"><h2>Listagem de pontos</h2></div>
                <div className="menu-bottom">
                    {/* {state.length > 0 ? (
                        state.map((list) => <ul>
                            <li key={list.id}>{list}</li>
                        </ul>)
                    ) : */} Sem pontos de monitoramento para exibir no momento
                </div>
            </div>
        </div>
    </>
  )
}

export default MenuSuperior