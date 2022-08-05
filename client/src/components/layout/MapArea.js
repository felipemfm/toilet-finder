import Map from '../modules/Map';
import '../../styles/components/layout/MapArea.css';
import Button from '../modules/Button';

export default function MapArea(props) {
  const clearState = function () {
    props.setLocations([]);
    props.setUserLocation({});
  };

  return (
    <div className='map_area'>
      <h2 className='map_title'>Select a bathroom!</h2>
      <div className='map'>
        {props.locations.length > 0 && (
          <Map
            userLocation={props.userLocation}
            locations={props.locations}
            setLocations={props.setLocations}
            setDestination={props.setDestination}
          />
        )}
      </div>
      <Button title='Clear' onClick={clearState} />
    </div>
  );
}
