import axios from 'axios';
import { useEffect, useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import './styles/reset.css';
import './styles/base.css';
import Header from './components/layout/Header';
import TopArea from './components/layout/TopArea';
import MapArea from './components/layout/MapArea';
import DetailArea from './components/layout/DetailArea';

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [mode, setMode] = useState('closest_bathroom');
  const [locations, setLocations] = useState([]);
  const [destination, setDestination] = useState({});

  const GOOGLE_API_KEY = 'AIzaSyB1IuqtNckU_jJcai7fN1lyNj4ua88vs8g';

  const getData = async function (limit, mode) { 
    await axios
      .get('http://localhost:8000/api/v1/closest', { // server runs on 8000 (react on 3000)
        params: { userLocation, limit, mode },
      })
      .then((res) => setLocations(res.data))
      .catch((err) => console.log(err));
  };
  // get locations based on menu mode selection
  useEffect(() => { 
    setLocations([]);
    if (userLocation['lat']) { // if user location exists
      switch (mode) {
        case 'closest_bathroom':
          userLocation && getData(1, 'closest_bathroom');
          break;
        case 'public_bathroom':
          userLocation && getData(100, 'public_bathroom');
          break;
        case 'non_public_bathroom':
          userLocation && getData(100, 'non_public_bathroom');
          break;
        case 'all_bathrooms':
          userLocation && getData(100, 'all_bathrooms');
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation, mode]);

  useEffect(() => {
    if (mode === 'closest_bathroom') {
      locations.length > 0 && setDestination(locations[0]);
    }
  }, [locations, mode]);

  return (
    <>
      <Header />
      {locations.length === 0 && ( // if locations empty go to Top Area
        <TopArea
          userLocation={userLocation}
          setUserLocation={setUserLocation}
          mode={mode}
          setMode={setMode}
        />
      )}
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}> {/* loads API key */}
        {locations.length > 1 && userLocation['lat'] && ( // if location options are greater than one switch to MapArea
          <MapArea
            userLocation={userLocation}
            locations={locations}
            setUserLocation={setUserLocation}
            setLocations={setLocations}
            setDestination={setDestination}
          />
        )}
        {locations.length === 1 && userLocation['lat'] && ( // if destination set, location set to one and switches to DetailArea
          <DetailArea
            userLocation={userLocation}
            destination={destination}
            setUserLocation={setUserLocation}
            setLocations={setLocations}
            setDestination={setDestination}
          />
        )}
      </LoadScript> 
    </>
  );
}

export default App;
