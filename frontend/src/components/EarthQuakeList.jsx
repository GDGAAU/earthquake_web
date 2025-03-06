import React from 'react';
import EarthQuakeCard from './EarthQuakeCard';

function EarthQuakeList({ earthquakes }) {
  return (
    <div className="flex flex-col items-start space-y-4">
      {earthquakes.map((quake, index) => (
        <EarthQuakeCard
          key={index}
          location={quake.location}
          magnitude={quake.magnitude}
          latitude={quake.latitude}
          longitude={quake.longitude}
          distance={quake.distance}
          time={quake.time}
        />
      ))}
    </div>
  );
}

export default EarthQuakeList;