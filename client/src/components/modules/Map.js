import React, { useState } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import Button from './Button';

export default function Map(props) {
  const [markerInfo, setMarkerInfo] = useState(null);

  const mapStyles = {
    height: '100%',
    width: '100%',
  };
  const defaultCenter = {
    lat: props.userLocation.lat,
    lng: props.userLocation.lng,
  };
  return (
    <>
    {/*makes map appear*/}
      <GoogleMap 
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        onClick={() => setMarkerInfo(null)}
      >
        <MarkerF label={'👤'} key={0} position={defaultCenter}></MarkerF>
        {props.locations.length > 0 &&
          props.locations.map((item) => {
            return (
              <MarkerF
                key={item.id}
                label={'🚻'}
                position={{ lat: Number(item.lat), lng: Number(item.lng) }}
                onClick={() => setMarkerInfo(item)}
              />
            );
          })}
      </GoogleMap>
      {markerInfo ? (
        <div>
          <h3>Establishment: {markerInfo.name}</h3>
          {markerInfo.type !== 'publicToilet' ? (
            <h3>Type: {markerInfo.type}</h3>
          ) : null}
          <h3>Distance: {Math.floor(markerInfo.distance)}m</h3>
          <Button
            title={'Go!'}
            // this click will make MapArea change to DetailArea component
            onClick={() => {
              props.setLocations([markerInfo]);
              props.setDestination(markerInfo);
            }}
          />
        </div>
      ) : null}
    </>
  );
}
