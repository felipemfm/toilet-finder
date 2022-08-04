import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Map() {
  const GOOGLE_API_KEY='AIzaSyB1IuqtNckU_jJcai7fN1lyNj4ua88vs8g';

  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  };

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
      />
    </LoadScript>
  )
}
