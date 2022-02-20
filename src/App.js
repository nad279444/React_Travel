

// function App() {
//   const [viewState, setViewState] = React.useState({
//     width:'100vw',
//     height:'100vh',
//     longitude: -122.4376,
//     latitude: 37.7577,
//     zoom: 3.5
//   });

//   return <Map
//     {...viewState}
//     mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
//     onMove={evt => setViewState(evt.viewState)}
//     mapStyle="mapbox://styles/mapbox/streets-v9"
    
//   />;
// }

import * as React from 'react';
import Map, {Marker} from 'react-map-gl';

function App() {
  return <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
  >
    <Marker longitude={-100} latitude={40} anchor="bottom" >
      <img src="./pin.png" />
    </Marker>
  </Map>;
}

export default App
