import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";
import useApplicationData from "../hooks/useApplicationData";

import "./PlayerMap.css"

// Default center of map on load
let center = {
  lat: 43.644357428479296,
  lng: -79.40218810875912
};

// Map cotainer size
const containerStyle = {
  width: '1110px',
  height: '600px',
};

export default React.memo(function Map() {

  const [selected, setSelected] = useState({});
  const { users, setUsers } = useApplicationData();
  const [points, setPoints] = useState();

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

  // Get geocode based on a city and country
  async function getLocation(city, country) {
    try {
      let response = await Geocode.fromAddress(`${city}, ${country}`);
      return (
        {
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng
        }
      )
    }
    catch (err) {
      console.log("Error fetching geodata:", err);
    }
    return null;
  }
  // get geocode of each user in the database 
  async function getLocations(users) {
    let result = [];
    for (let user of users) {
      const res = await getLocation(`${user.city}, ${user.country}`);
      const newUser = {
        name: user.username,
        city: user.city,
        country: user.country,
        wordsPerMin: user.words_per_min,
        level: user.highest_level_cleared,
        avatar: user.avatar,
        location: res,
      }
      result.push(newUser)
    }
    return result;
  }

  useEffect(() => {
    (async () => {
      const stuff = await getLocations(users).then((res) => { return res })
      setPoints(stuff);
    })()
  }, [users]);

  const onSelect = item => {
    setSelected(item);
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
      >
        {
          points && points.map(item => {
            return (
              <Marker key={item.name}
                position={item.location}
                onClick={() => onSelect(item)}
              />
            )
          })
        }
        {
          selected.location &&
          (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div>
                {selected.avatar === "Dinosaur" ?
                  <img src="images/dinosaur.png" className="map-avatar" />
                  : selected.avatar === "Ghost" ?
                    <img src="images/ghost.png" className="map-avatar" />
                    : selected.avatar === "Monster" ?
                      <img src="images/monster.png" className="map-avatar" />
                      : selected.avatar === "Unicorn" ?
                        <img src="images/unicorn.png" className="map-avatar" />
                        : selected.avatar === "Fox" ?
                          <img src="images/fox.png" className="map-avatar" />
                          :
                          <img src="images/sample-avatar.jpg" className="map-avatar" />
                }
                <p style={{ margin: "0" }}>@{selected.name}</p>
                <p style={{ margin: "0" }}>{selected.city}, {selected.country}</p>
                <p style={{ margin: "0" }}>Level: {selected.level}</p>
                <p style={{ margin: "0" }}>WPM: {selected.wordsPerMin}</p>
              </div>
            </InfoWindow>
          )
        }
        <></>
      </GoogleMap>
    </LoadScript >
  )
})