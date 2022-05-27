//google maps api
import { Marker } from '@react-google-maps/api' 
//hook context
import { useContext } from 'react'
//MarkContext
import { MarkContext } from '../../context/MarkContext'
//poiterIcons
import pointerIcon from '../../assets/Regular=on, Move=off.svg'
import pointerClicked from '../../assets/Regular=off, Move=on.svg'

const Pointer = () => {

    const { dispatch, state } = useContext(MarkContext)

    const handlePointer = (id) => {
      dispatch({type: "draggable", payload: id})
    }

  return (
    <>
      {state.map((marker) => (
          <Marker 
            key={marker.index}
            position={marker}
            draggable={marker.draggable}
            onClick={() => handlePointer(marker.id)}
            icon={marker.draggable ? pointerClicked : pointerIcon}
          />
      ))}
    </>
  )
}

export default Pointer