import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

import Button from '../modules/Button';
import MapRoutes from '../modules/MapRoutes';

export default function Map(props) {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };
  const defaultCenter = {
    lat: props.userLocation.lat,
    lng: props.userLocation.lng,
  };

  // clear button resets everything
  const clearState = function () { 
    props.setLocations([]);
    props.setDestination({});
    props.setUserLocation({});
  };

  return (
    <div>
      <div className='map'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <MapRoutes
            user={props.userLocation}
            destination={props.destination}
          />
        </GoogleMap>
      </div>
      <div>
        <p>Destination: {props.destination.name}</p>
        {props.destination.type !== 'publicToilet' ?  <p>Type: {props.destination.type}</p> : null}
        <p>Distance: {Math.floor(props.destination.distance)} m</p>
      </div>
      <Button title={'cancel'} onClick={clearState} />
    </div>
  );
}
