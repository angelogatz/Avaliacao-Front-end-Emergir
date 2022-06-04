import { useContext } from "react" 
import { MarkerContext } from "../../context/markerContext" 
import { ModalContext } from "../../context/modalContext"
import './Modal.css'

const Modal = () => {
    const { 
      dispatch } = useContext(MarkerContext)

    const { 
      buttonSelect,
      setButtonSelect, 
      showText } = useContext(ModalContext)

    const handleModalRemoveAll = () => {
      dispatch({type: "REMOVE_ALL"}) 
      setButtonSelect(false)
    }
    
    const handleCancel = () => {
      setButtonSelect(false)
    }
    
    const handleModalRemove = () => {
      dispatch({type: "REMOVE"}) 
      setButtonSelect(false)
    }

  return (
    <div className="modal" style={
      buttonSelect === true ? {display: "flex"} : 
      buttonSelect === false ? {display: "none"} : null}>

      <div className="modal-container">
        <div className="modal-top"> 
          <i 
            onClick={handleCancel} 
            className="uil uil-times">
          </i>
        </div>
        <div className="modal-middle">
          <div className="modal-link-1">
            <h1>{
            showText === "remove" ? `Excluir pontos selecionados?` : showText === "removeAll" ? `Excluir todos os pontos?` : null}</h1>
          </div>

          <div className="modal-link-2">
            <h2>Atenção!</h2>
            <p>Esta ação não poderá ser desfeita!</p>
          </div>
        </div>

        <div className="modal-bottom">

          { showText === "remove" ? 

          <button className="btn-modal btn-remove btn-delete-danger" onClick={handleModalRemove} ><i className="uil uil-trash-alt"></i> Excluir</button> 

          : showText === "removeAll" ? 

          <button className="btn-modal btn-remove btn-delete-danger" onClick={handleModalRemoveAll} ><i className="uil uil-trash-alt"></i> Excluir</button> : null}

          <button 
            className="btn-modal" 
            onClick={handleCancel}>Cancelar
          </button>

        </div>
      </div>
    </div>
  )
}

export default Modal