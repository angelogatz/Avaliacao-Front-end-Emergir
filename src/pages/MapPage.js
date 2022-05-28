import { GoogleMap, useJsApiLoader, Marker, Polygon } from '@react-google-maps/api';
import './MapPage.css'
import data from '../data/db.json'
import { useContext } from 'react';
import { MarkContext } from '../context/MarkContext';
import Pointer from '../components/pointer/Pointer';
import MenuInferior from '../components/menuinferior/MenuInferior';
import MenuSuperior from '../components/menusuperior/MenuSuperior';

const MapPage = () => {

    const { state, dispatch } = useContext(MarkContext)
    
    const options = {controls: [], disableDefaultUI: true, mapTypeId: "satellite", zoomControl: false}

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC3KCrCzoO1A-suKY2L_sPFMWSRRQwWc4I"
      })

      const coordinates = data.features[0].geometry.coordinates[0].map((coord) => (
        {lat: coord[1],
          lng: coord[0]}
      ))

      const position = {
        lat: -15.18,
        lng: -53.5845
      }

    const polygonOp = {
      fillColor: "rgba(255, 255, 255, 0.326)",
      fillOpacity: 0.4,
      strokeColor: "white",
      strokeOpacity: 0.8,
      geodesic: true,
  }

  return (
    
    <div className='map'>
        {isLoaded ? (
        
        <GoogleMap
            mapContainerStyle={{width:'100%', height: '100%'}}
            center={position}
            zoom={15}
            options={options}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
        >
        
            { /* Child components, such as markers, info windows, etc. */ }
            {/* <Marker position={position}  options={{
                label: {
                    text: "Posição teste",
                    className: 'map-marker',
                },
                draggable: true,
            }}/> */}
            <Polygon 
                paths={coordinates}
                options={polygonOp} 
            />
            <Pointer />
            <MenuInferior />
            <MenuSuperior />
        </GoogleMap>
        
  ) : <></>}
    
    </div>
  )
}

export default MapPage