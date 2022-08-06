import React from 'react';
import typeNormalize from '../../util';

export default function ItemInfo(props) {
  return (
    <>
      <h3>Destination: {props.item.name}</h3>
      {props.item.type !== 'publicToilet' ? (
        <h3>Type: {typeNormalize(props.item.type)}</h3>
      ) : null}
      <h3>Distance: {Math.floor(props.item.distance)}m</h3>
    </>
  );
}
