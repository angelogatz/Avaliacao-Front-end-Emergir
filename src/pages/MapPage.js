import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';
import './MapPage.css'
import geoJson from '../data/geoJson.json'
import Pointer from '../components/Pointer/Pointer';
import MenuInferior from '../components/Menuinferior/MenuInferior';
import MenuSuperior from '../components/Menusuperior/MenuSuperior';
import Header from '../components/Header/Header'
import { API_KEY } from '../API_KEY';
import Modal from '../components/Modal/Modal';
import { useContext } from 'react';
import { MarkerContext } from '../context/markerContext';
// import Loading from '../components/loading/Loading';

const MAP_COORDINATES = 
  geoJson
  .features[0]
  .geometry
  .coordinates[0]
  .map((coord) => ({
    lat: coord[1],
    lng: coord[0]
}))

const MAP_CENTER_POSITION = {
  lat: -15.18,
  lng: -53.5845
}

const MAP_OPTIONS = {
  controls: [],
  disableDefaultUI: true,
  mapTypeId: "satellite",
  zoomControl: false,
}

const POLYGON_OPTIONS = {
  fillColor: "rgba(255, 255, 255, 0.326)",
  fillOpacity: 0.4,
  strokeColor: "white",
  strokeOpacity: 0.8,
  geodesic: true,
}


const MapPage = () => {

  const { state, dispatch } = useContext(MarkerContext)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const handleRemoveDraggable = (id) => {
    dispatch({type: "REMOVE_DRAGGABLE", payload: id})
  }

  const pinId = state.map(pin => pin.id)

  return (
    <>{ 
    <div className='map'>
        {// !isLoaded ?
        // <Loading /> :
        isLoaded ?
        (<GoogleMap
            mapContainerStyle={{width:'100%', height: '100%'}}
            center={MAP_CENTER_POSITION}
            zoom={15}
            options={MAP_OPTIONS}
            onClick={() => handleRemoveDraggable(pinId)}
        >
          <Polygon 
            paths={MAP_COORDINATES}
            options={POLYGON_OPTIONS}
            onClick={() => handleRemoveDraggable(pinId)}
          />   
          <Header />
          <Modal />
          <Pointer />
          <MenuSuperior />
          <MenuInferior />
        </GoogleMap>
        
  ) : <></>}
    
    </div>

    }</>
  )
}

export default MapPage