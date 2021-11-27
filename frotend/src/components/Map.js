
import React, {useState} from 'react';
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import point from '../assets/images/point.png'

function Map({position}) {

  const locations = [
    {
      lat: 48.860798670661644,
      long: 2.3377600437557904
    },
    {
      lat: 36.910384,
      long:-76.313124
    },
    {
      lat: 40.413780,
      long: -3.692127
    }
  ]

  let [viewport, setViewport] = useState({
    latitude: locations[position].lat,
    longitude: locations[position].long,
    zoom: 14,
    pitch: 50,
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: true,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false
  });

  const navControlStyle= {
    right: 10,
    top: 10
  };

  return (
    viewport.width = '100%',
    viewport.height= '40vh',
    <ReactMapGL
    mapStyle={'mapbox://styles/mapbox/dark-v9'}
      mapboxApiAccessToken={
        'pk.eyJ1IjoiZW1pbGlhaXVsaWFuYSIsImEiOiJja3dnbWc4a3IwbzExMndudm9vbm9wenl6In0.kek0riUQ99xJV8dHkh9Zkw'
      }
      {...viewport}
      onViewportChange = { (newView) => setViewport(newView)}
      >
        <NavigationControl style={navControlStyle} />
        <Marker 
          latitude={locations[position].lat}
          longitude={locations[position].long}
          offsetTop={-viewport.zoom * 4}
          offsetLeft={-viewport.zoom * 2}
        >
          <img src={point}
            width={viewport.zoom * 4}
            height={viewport.zoom * 4}
          >
          </img>
        </Marker>
      </ReactMapGL>
  );
}

export default Map;
