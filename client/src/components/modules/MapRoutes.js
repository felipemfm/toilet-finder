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
      {routes && <DirectionsRenderer directions={routes} />}
    </>
  );
}
