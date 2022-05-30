import React from 'react'
import './App.css';
import { MarkContextProvider } from './context/MarkContext';
import MapPage from './pages/MapPage';

function App() {
  return (
    <MarkContextProvider>
      <MapPage />
    </MarkContextProvider>
  );
}

export default App;
