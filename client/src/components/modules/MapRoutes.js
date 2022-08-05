import React, { useState } from 'react';
import {  
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';

export default function MapRoutes(props) {
  const [routes, setRoutes] = useState();

  return (
    <>
      {!routes && (
        <DirectionsService
          options={{
            destination: props.destination.location,
            origin: props.user.location,
            travelMode: 'WALKING',
          }}
          callback={(res) => {
            if (res) {
              if (res.status === 'OK') {
                setRoutes(res);
              }
            } else {
              console.log('response: ', res);
            }
          }}
        />
      )}
      {routes && <DirectionsRenderer directions={routes} />}
    </>
  );
}
