import React from 'react'
import Button from '../modules/Button';
import '../../styles/components/layout/TopArea.css';

export default function TopArea() {
  return (
    <div className='top_area'>
      <h2 className='top_title'>Find a bathroom!</h2>
      <Button title="Go!"/>
    </div>
  )
}
