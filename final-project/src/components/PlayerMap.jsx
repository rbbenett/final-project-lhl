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
    let userLocation = []
    for (let user of users ) {
      let userObj = {}
        userObj['name'] = user.username;
        userObj['location'] = {
          ['lat']: user.city,
          ['long']: user.country
        } 
         userLocation.push(userObj) 
        }
        return userLocation
      } 

      console.log(userLocations())

    var geocoding = require('geocoding');

    geocoding({
      address: 'Santa Cruz',
      components: {
        country: 'ES'
      }
    }).then(function(results){
      console.log(results);
    })

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