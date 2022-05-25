import React from 'react'
import './App.css';
import Header from './components/header/Header';
import MenuInferior from './components/MenuInferior';

import { MarkContextProvider } from './context/MarkContext';
import MapPage from './pages/MapPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MarkContextProvider>
        <MapPage />
        <MenuInferior />
      </MarkContextProvider>
      
    </div>
  );
}

export default App;
