//google maps api
import { Marker } from '@react-google-maps/api' 
//hook context
import { useContext } from 'react'
//MarkContext
import { MarkerContext } from '../../context/markerContext'
//poiterIcons
import pointerIcon from '../../assets/Regular=on, Move=off.svg'
import pointerClicked from '../../assets/Regular=off, Move=on.svg'

const Pointer = () => {

  const { dispatch, state } = useContext(MarkerContext)
  // const handleRemoveDraggable = (e) => {

  //   const position = [
  //     {lat: e.latLng.lat()},
  //     {lng: e.latLng.lng()}
  //   ]
  
  //   dispatch({type: "MODIFY", payload: {...position}})
  // }
  const handlePointer = (id) => {
    dispatch({type: "DRAGGABLE", payload: id})
  }

  const handleRemoveDraggable = (id) => {
    dispatch({type: "REMOVE_DRAGGABLE", payload: id})
  }

  return (
    <>
      {state.map((marker) => (
        <Marker 
          key={marker.index}
          position={marker}
          draggable={marker.draggable}
          onClick={() => handlePointer(marker.id)}
          onMouseUp={() => handleRemoveDraggable(marker.id)}
          icon={marker.draggable ? pointerClicked : pointerIcon}
        />
      ))}
    </>
  )
}

export default Pointer