

import React ,{useState,useEffect }from 'react';
import Map, {Marker,Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const[placesInfo,setPlacesInfo] = useState([]);
  const [showPopup,setShowPopup] = useState({});
  const [viewState,setViewState] = useState({
    longitude: 1.0232,
    latitude: 7.9465,
    zoom: 4
  })

 

  async function listLogs(){
    const response = await fetch('http://localhost:1337/routes');
    return await response.json();
   
  }

  useEffect(() => {
    (async() => {
       const placesInfo = await listLogs();
       setPlacesInfo(placesInfo);
      
    })()
     
  
  },[])

  return <Map
    {...viewState}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    onMove={evt => setViewState(evt.viewState)}
    style={{width: '100vw', height: '100vh'}}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
  >
    {placesInfo.map(entry => (
      <>
      <Marker longitude={entry.longitude} latitude={entry.latitude} key={entry._id} >
        <div onClick={() => setShowPopup({
          [entry._id]:true,
        })}>
        <img 
            style={{width:24,height:24}}
            className='marker'
            src=" https://i.imgur.com/y0G5YTX.png"
            alt="marker" 
            />
        </div>
           
     </Marker>
     {showPopup[entry._id] && (
      <Popup longitude={entry.longitude} latitude={entry.latitude}
        anchor="top"
        dynamicPosition={true}
        onClose={() => setShowPopup(false)}>
        <div>{entry.title}</div>
      </Popup>)}
     </>
     ), 
  
    )
   
    }
 
  </Map>;
}

export default App


