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

  const typeNormalize = (type) => {
    if (type === 'publicToilet') {
      return 'Public Toilet';
    }
    if (type === 'convenienceStore') {
      return 'Convenience Store Toilet';
    }
    if (type === 'fastFood') {
      return 'Fast Food Toilet';
    }
    if (type === 'familyRestaurant') {
      return 'Family Restaurant Toilet';
    }
    if (type === 'departmentStore') {
      return 'Deparment Store Toilet';
    }
    if (type === 'lodging') {
      return 'Hotel Toilet';
    }
    if (type === 'library') {
      return 'Library Toilet';
    }
  };

  return (
    <>
      {/*makes map appear*/}
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={markerInfo ? null : defaultCenter}
        onClick={() => setMarkerInfo(null)}
      >
        <MarkerF  key={0} position={defaultCenter} />
        {props.locations.length > 0 &&
          props.locations.map((item) => {
            return (
              <MarkerF
                key={item.id}
                icon={{
                  url: 'https://i.ibb.co/r3cPX7w/logo-marker-sm.png',
                  scaledSize: {height: 25, width: 25}
                }}
                position={{ lat: Number(item.lat), lng: Number(item.lng) }}
                onClick={() => setMarkerInfo(item)}
              />
            );
          })}
      </GoogleMap>
      {markerInfo ? (
        <div className='location_info'>
          <h3>Destination: {markerInfo.name}</h3>
          {markerInfo.type !== 'publicToilet' ? (
            <h3>Type: {typeNormalize(markerInfo.type)}</h3>
          ) : null}
          <h3>Distance: {Math.floor(markerInfo.distance)}m</h3>
          <br></br>
          <br></br>
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
