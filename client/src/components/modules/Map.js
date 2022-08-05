import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

export default function Map() {
  const GOOGLE_API_KEY='AIzaSyDeHvAZDDxYcApYzAZh6ge13VYXPQbBawE';

  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  const defaultCenter = {
    lat: 35.6581391, lng: 139.7277848
  };

  const locations = [
    {
        name: "Public Toilet",
        location: {
            lat: 35.665897800000000,
            lng: 139.740290600000000
        },
    },
    {
        name: "Ebisu Park Toilet",
        location: {
            lat: 35.647003300000000,
            lng: 139.707138900000000
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
