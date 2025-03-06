import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";

const [previousEarthquakes, setPreviousEarthquakes] = useState([]);

const prevQuakeRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/earthquakes/previous`, {
    withCredentials: true,
  });
  setPreviousEarthquakes(prevQuakeRes.data);

  const mapStyles = { height: "400px", width: "100%" };
  const defaultCenter =
    previousEarthquakes.length > 0
      ? { lat: previousEarthquakes[0].latitude, lng: previousEarthquakes[0].longitude }
      : { lat: 0, lng: 0 };


function previous() {
  return (
    <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-2">Previous Earthquakes (Stored)</h2>
    {previousEarthquakes.length > 0 ? (
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={4}>
          {previousEarthquakes.map((quake) => (
            <Marker
              key={quake._id}
              position={{ lat: quake.latitude, lng: quake.longitude }}
              title={`Magnitude: ${quake.magnitude}\nLocation: ${quake.place || "Unknown"}\nTime: ${new Date(
                quake.time
              ).toLocaleString()}`}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    ) : (
      <p className="text-gray-500">No previous earthquakes stored</p>
    )}
  </div>
  )
}

export default previous


      