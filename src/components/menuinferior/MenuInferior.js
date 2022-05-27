import { useContext } from "react"
import { MarkContext } from "../../context/MarkContext"
import { v4 as uuidv4 } from 'uuid'
import './MenuInferior.css'
import trash from '../../assets/Trash.svg'
import pointer from '../../assets/Pin.svg'

const MenuInferior = () => {

  const modal = document.querySelector(".modal")

  const { dispatch, state } = useContext(MarkContext)

  const position = {
    lat: -15.18,
    lng: -53.5845
  }

  const pointerSelected = state.find((pin) => pin.draggable)

  const handleAdd = () => {
    
    dispatch({type: "add", payload: {...position, id: uuidv4(), draggable: false, date: new Date()}})
  }

  const handleRemove = () => {
    document.querySelector(".h1-remove-all").style.display = "none"
    document.querySelector(".h1-remove").style.display = ""
    document.querySelector(".btn-remove-all").style.display = "none"
    document.querySelector(".btn-remove").style.display = ""
    modal.style.display = "flex"
  }

  const handleModalRemove = () => {
    dispatch({type: "remove"}) 
    modal.style.display = "none" 
  }

  const handleRemoveAll = () => {
    document.querySelector(".h1-remove").style.display = "none"
    document.querySelector(".h1-remove-all").style.display = ""
    document.querySelector(".btn-remove").style.display = "none"
    document.querySelector(".btn-remove-all").style.display = ""
    modal.style.display = "flex"
  }

  const handleModalRemoveAll = () => {
    dispatch({type: "removeAll"}) 
    modal.style.display = "none" 
  }

  const handleCancel = () => {
    modal.style.display = "none" 
  }

  return (
    <>
      <div className="menu-inf">

        <div className="menu-inf-container">
            {pointerSelected ? <button className="btn btn-danger" onClick={handleRemove}> Deletar Pin <img src={trash} alt="trashImage"/> </button> : ""}
        </div>

        <div className="menu-inf-container">
            <button className="btn" onClick={handleAdd}>Adicionar novo Pin <img src={pointer} alt="pinImage"/></button>
        </div>
    
        <div className="menu-inf-container">
            {state.length > 0 ? (<button className="btn btn-danger" onClick={handleRemoveAll}> Deletar todos <img src={trash} alt="trashImage"/></button>) : ""}
        </div>
      </div>

      <div className="modal">
          <div className="modal-container">
              <div className="modal-top"> <i onClick={handleCancel} class="uil uil-times"></i></div>
              <div className="modal-middle">
                <div className="modal-link-1">
                  <h1 className="h1-remove">Excluir pontos selecionados?</h1>
                  <h1 className="h1-remove-all">Excluir todos os pontos?</h1>
                </div>
                <div className="modal-link-2">
                  <h2>Atenção!</h2>
                  <p>Esta ação não poderá ser desfeita!</p>
                </div>
              </div>
              <div className="modal-bottom">

                <button className="btn-modal btn-remove-all btn-delete-danger" onClick={handleModalRemoveAll}><i class="uil uil-trash-alt"></i> Excluir todos </button>

                <button className="btn-modal btn-remove btn-delete-danger" onClick={handleModalRemove} ><i class="uil uil-trash-alt"></i> Excluir </button>

                <button className="btn-modal" onClick={handleCancel}>Cancelar</button>

              </div>
          </div>
      </div>

    </>
  )
}

export default MenuInferior