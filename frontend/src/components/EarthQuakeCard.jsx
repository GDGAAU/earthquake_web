import React from 'react';

function EarthQuakeCard({ location, magnitude, latitude, longitude, distance, time }) {
  const formattedTime = time ? new Date(time).toLocaleString() : 'N/A';

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold mb-2">{location}</h2>
      <p className="text-gray-700 mb-1">Magnitude: {magnitude}</p>
      <p className="text-gray-700 mb-1">Distance: {distance} km</p>
      <div className="text-gray-700 mb-1">
        <span className="block">Latitude: {latitude}</span>
        <span className="block">Longitude: {longitude}</span>
      </div>
      <p className="text-gray-700">Time: {formattedTime}</p>
    </div>
  );
}

export default EarthQuakeCard;