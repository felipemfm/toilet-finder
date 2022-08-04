import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

export default function Map() {
  const GOOGLE_API_KEY='AIzaSyDeHvAZDDxYcApYzAZh6ge13VYXPQbBawE';

  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  const defaultCenter = {
    // lat: 35.6581391, lng: 139.7277848
    lat: 41.3851, lng: 2.1734
  };

  const locations = [
    {
        name: "Location 1",
        location: {
            lat: 41.3954,
            lng: 2.162
        },
    },
    {
        name: "Location 2",
        location: {
            lat: 41.3917,
            lng: 2.1649
        },
    },
  ];

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
      >
        {
          locations.map(item => {
              return (
                  <MarkerF key={item.name} position={item.location} />
              )
          })
        }
      </GoogleMap>
    </LoadScript>
  )
}
