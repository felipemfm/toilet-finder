import React, { useState } from 'react';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import Button from './Button';

export default function Map(props) {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

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
      return 'Convenience Store';
    }
    if (type === 'fastFood') {
      return 'Fast Food';
    }
    if (type === 'familyRestaurant') {
      return 'Family Restaurant';
    }
    if (type === 'departmentStore') {
      return 'Department Store';
    }
    if (type === 'lodging') {
      return 'Hotel';
    }
    if (type === 'library') {
      return 'Library';
    }
  };

  return (
    <>
      {/*makes map appear*/}
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={activeMarker ? null : defaultCenter}
      >
        <MarkerF key={0} position={defaultCenter} />
        {props.locations.length > 0 &&
          props.locations.map((item) => {
            return (
              <MarkerF
                key={item.id}
                icon={{
                  url: 'https://i.ibb.co/r3cPX7w/logo-marker-sm.png',
                  scaledSize: { height: 25, width: 25 },
                }}
                position={{ lat: Number(item.lat), lng: Number(item.lng) }}
                onClick={() => handleActiveMarker(item.id)}
              >
                {activeMarker === item.id ? (
                  <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                    <div>
                      <h3>Destination: {item.name}</h3>
                      {item.type !== 'publicToilet' ? (
                        <h3>Type: {typeNormalize(item.type)}</h3>
                      ) : null}
                      <h3>Distance: {Math.floor(item.distance)}m</h3>
                      <Button
                        title={'Go!'}
                        // this click will make MapArea change to DetailArea component
                        onClick={() => {
                          props.setLocations([item]);
                          props.setDestination(item);
                        }}
                      />
                    </div>
                  </InfoWindowF>
                ) : null}
              </MarkerF>
            );
          })}
      </GoogleMap>
    </>
  );
}
