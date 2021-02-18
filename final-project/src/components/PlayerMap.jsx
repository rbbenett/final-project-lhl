import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import useApplicationData from "../hooks/useApplicationData"

const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: 43.6532,
  lng: -79.3832
};

const position = {
  lat: 37.772,
  lng: -122.214
}

function Map() {
  
  const { users, setUsers } = useApplicationData()

  const userLocations = () => {
    let userLocation = {
      name: "",
      location: {
        lat: 0,
        lng: 0
      },
    }
    for (let i = 0; i < users.length; i++ ) {
      userLocation = {
        name: users[i].username,
        location: {
          lat: users[i].city,
          long: users[i].country
        }
      } 
      return userLocation
    }
  }

  console.log(userLocations())

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)