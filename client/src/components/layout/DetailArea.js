import React from 'react';
import Button from '../modules/Button';
import '../../styles/components/layout/DetailArea.css';

export default function DetailArea() {
  return (
    <div className='detail_area'>
      <h2 className='detail_title'>Bathroom Found!</h2>
      <Button title="Search Again?"/>
    </div>
  )
}
