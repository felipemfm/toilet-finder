import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/reset.css';
import './styles/base.css';
import Header from './components/layout/Header';
import TopArea from './components/layout/TopArea';
import MapArea from './components/layout/MapArea';
import DetailArea from './components/layout/DetailArea';

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [mode, setMode] = useState('');

  return (
    <>
      <Header />
      <TopArea
        userLocation={userLocation}
        setUserLocation={setUserLocation}
        mode={mode}
        setMode={setMode}
      />
      {/* <MapArea mode={mode} /> */}
      {/* <DetailArea /> */}
    </>
  );
}

export default App;
