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

  const typeNormalize = (type) => {
    if (type === 'publicToilet') {return 'Public Toilet'};
    if (type === 'convenienceStore') {return 'Convenience Store Toilet'};
    if (type === 'fastFood') {return 'Fast Food Toilet'};
    if (type === 'familyRestaurant') {return 'Family Restaurant Toilet'};
    if (type === 'departmentStore') {return 'Deparment Store Toilet'};
    if (type === 'lodging') {return 'Hotel Toilet'};
    if (type === 'library') {return 'Library Toilet'};
  }

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
      
      <div className='location_info'>
        <h3>Destination: {props.destination.name}</h3>
        {props.destination.type !== 'publicToilet' ?  <h3>Type: {typeNormalize(props.destination.type)}</h3> : null}
        <h3>Distance: {Math.floor(props.destination.distance)} m</h3>
      </div>
      <Button title={'Clear'} onClick={clearState} />
    </div>
    </div>
  );
}
