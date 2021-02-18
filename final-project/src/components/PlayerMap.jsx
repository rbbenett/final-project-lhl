import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import useApplicationData from "../hooks/useApplicationData";
import Geocode from "react-geocode";

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

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");






function Map() {

  const { users, setUsers } = useApplicationData()

  const userLocations = () => {
    let userLocation = []
    for (let user of users) {
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
      { userLocations().map(item => {
        const userLocation = Geocode.fromAddress(item.location).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
          },
          (error) => {
            console.error(error);
          }
        );
              return (
              <Marker key={item.name} position={userLocation}/>
              )
            })}
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map)