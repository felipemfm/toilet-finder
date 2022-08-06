import React from 'react';
import { MarkerF, InfoWindowF } from '@react-google-maps/api';
import Button from './Button';
import ItemInfo from './ItemInfo';
export default function Map(props) {
  const handleActiveMarker = (marker) => {
    if (marker === props.activeMarker) {
      return;
    }
    props.setActiveMarker(marker);
  };

  const setState = (item) => {
    props.setLocations([item]);
    props.setDestination(item);
    props.setActiveMarker(null);
  };

  return (
    <>
      {/* User Marker */}
      <MarkerF
        key={0}
        position={{
          lat: props.userLocation.lat,
          lng: props.userLocation.lng,
        }}
      />
      {/* Makes map appear */}
      {props.locations.length > 0 &&
        props.locations.map((item) => {
          return (
            <MarkerF
              key={item.id + 1}
              icon={{
                url: 'https://i.ibb.co/r3cPX7w/logo-marker-sm.png',
                scaledSize: { height: 25, width: 25 },
              }}
              position={{ lat: Number(item.lat), lng: Number(item.lng) }}
              onClick={() => handleActiveMarker(item.id)}
            >
              {props.activeMarker === item.id ? (
                <InfoWindowF onCloseClick={() => props.setActiveMarker(null)}>
                  <div>
                    <ItemInfo item={item} />
                    {!props.destination['name'] && (
                      <Button
                        title={'Go!'}
                        // this click will make MapArea change to DetailArea component
                        onClick={() => setState(item)}
                      />
                    )}
                  </div>
                </InfoWindowF>
              ) : null}
            </MarkerF>
          );
        })}
    </>
  );
}
