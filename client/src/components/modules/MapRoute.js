import React, { useState } from 'react';
import { DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

export default function MapRoutes(props) {
  const [routes, setRoutes] = useState();

  return (
    <>
      {/*Google Map React API - set route to walking*/}
      {!routes && (
        <DirectionsService
          options={{
            destination: {
              lat: Number(props.destination.lat),
              lng: Number(props.destination.lng),
            },
            origin: props.user,
            travelMode: 'WALKING',
          }}
          callback={(res) => {
            if (res) {
              if (res.status === 'OK') {
                setRoutes(res);
              }
            } else {
              console.error(res);
            }
          }}
        />
      )}
      {routes && (
        <>
          <DirectionsRenderer
            directions={routes}
            options={{
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: '#4169E1',
                strokeOpacity: 1.0,
                strokeWeight: 6,
              },
            }}
          />
          <DirectionsRenderer
            directions={routes}
            options={{
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: '#DC143C',
                strokeOpacity: 1.0,
                strokeWeight: 2,  
              },
            }}
          />
        </>
      )}
    </>
  );
}
