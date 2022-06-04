import React from 'react'
import './App.css';
import { MarkerContextProvider } from './context/markerContext';
import { ModalContextProvider } from './context/modalContext';
import MapPage from './pages/MapPage';

function App() {
  return (
    <MarkerContextProvider>
      <ModalContextProvider>
        <MapPage />
      </ModalContextProvider>
    </MarkerContextProvider>
  );
}

export default App;
