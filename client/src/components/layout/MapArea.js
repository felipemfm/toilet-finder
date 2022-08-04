import React from 'react';
import Map from '../modules/Map';
import '../../styles/components/layout/MapArea.css';

export default function MapArea() {
  return (
    <div className='map_area'>
      <h2 className='map_title'>Select a bathroom!</h2>
      <div className='map'>
        <Map />
      </div>
    </div>
  )
}
