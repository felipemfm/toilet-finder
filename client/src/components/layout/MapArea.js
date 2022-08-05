import React, { useState, useEffect } from 'react';
import Map from '../modules/Map';
import '../../styles/components/layout/MapArea.css';
import Button from '../modules/Button';


export default function MapArea(props) {
  let getStatus;
  
  switch (props.mode) {
    case 'closest_bathroom':
      getStatus = '/getToilet';
      break;
    case 'public_bathroom':
      getStatus = '/getPublic';
      break;
    case 'non_public_bathroom':
      getStatus = '/getPrivate';
      break;
    case 'all_bathrooms':
      getStatus = '/getToilet';
      break;
  }

  return (
    <div className='map_area'>
      <h2 className='map_title'>Select a bathroom!</h2>
      <div className='map'>
        <Map getStatus={getStatus}/>
      </div>
      <Button title="Go to the closest bathroom"/>
    </div>
  )
}
