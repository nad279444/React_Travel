

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

import React ,{useState,useEffect }from 'react';
import Map, {Marker} from 'react-map-gl';

function App() {
  const[placesInfo,setPlacesInfo] = useState([])

  async function listLogs(){
    const response = await fetch('http://localhost:1337/routes');
    const data = await response.json();
    setPlacesInfo(data);
  }

  useEffect(() => {
     listLogs();
     console.log(placesInfo)
  
  },[placesInfo])

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
      <img src="./pin.png " alt="marker" />
    </Marker>
  </Map>;
}

export default App
