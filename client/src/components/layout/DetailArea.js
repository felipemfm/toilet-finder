import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
  
import Button from '../modules/Button';
import MapRoutes from '../modules/MapRoutes';

export default function Map() {
  const GOOGLE_API_KEY = 'AIzaSyDeHvAZDDxYcApYzAZh6ge13VYXPQbBawE';

  const mapStyles = {
    height: '100%',
    width: '100%',
  };
  const defaultCenter = {
    lat: 35.6581391,
    lng: 139.7277848,
  };
  const user = {
    name: 'user',
    location: {
      lat: 35.6581391,
      lng: 139.7277848,
    },
  };
  const destination = {
    name: 'Public Toilet',
    location: {
      lat: 35.6658978,
      lng: 139.7402906,
    },
    distance: 300,
  };
  return (
    <div>
      <div className='map'>
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            <MapRoutes user={user} destination={destination} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div>
        <p>Destination: {destination.name}</p>
        <p>Distance: {destination.distance} m</p>
      </div>
      <Button title={'cancel'} />
    </div>
  );
}
