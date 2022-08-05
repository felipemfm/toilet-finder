import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

export default function Map(props) {
  const GOOGLE_API_KEY='AIzaSyB1IuqtNckU_jJcai7fN1lyNj4ua88vs8g';
  const [bathroom, setBathroom] = useState('');
  const getStatus = props.getStatus;

  useEffect(() => {
    const getBathroom = async () => {
      await axios.get(getStatus).then((res) => {
        setBathroom(res.data);
      });
    };
    getBathroom();
  }, []);

  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  const defaultCenter = {
    lat: 35.6581391, lng: 139.7277848
  };


  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
      >
        {
          bathroom && bathroom.map(item => {
              return (
                  <MarkerF key={item.name} position={{lat: Number(item.lat), lng: Number(item.lng)}} />
              )
          })
        }
      </GoogleMap>
    </LoadScript>
  )
}
