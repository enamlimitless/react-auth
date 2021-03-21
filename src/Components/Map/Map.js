import React from 'react';
import './Map.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {
    return (
        <div>
            <LoadScript
      googleMapsApiKey="AIzaSyDT12aHHwTcVlWeuChnyxmw5Xefj7_PsKg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
        </div>
    );
};

export default Map;
