import React from 'react';
import '../../styles/components/layout/TopArea.css';
import Button from '../modules/Button';

export default function TopArea(props) {
  const watchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        props.setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        props.setMode(document.querySelector('.drop_menu').value);
      });
    } else {
      alert('Location services are not available on your device.');
    }
  };
  return (
    <div className='top_area'>
      <h2 className='top_title'>Find a Bathroom!</h2>
      <div>
        <select className='drop_menu'>
          <option value={'closest_bathroom'}>Closest Bathroom</option>
          <option value={'public_bathroom'}>Public Bathroom</option>
          <option value={'non_public_bathroom'}>Non-Public Bathroom</option>
          <option value={'all_bathrooms'}>All Bathrooms</option>
        </select>
        <Button title={'Go!'} onClick={watchUserLocation} />
      </div>
    </div>
  );
}
