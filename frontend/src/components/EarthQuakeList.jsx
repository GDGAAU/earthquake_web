import React from 'react';
import { motion } from 'framer-motion';
import EarthQuakeCard from './EarthQuakeCard';

function EarthQuakeList({ earthquakes }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
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
    </motion.div>
  );
}

export default EarthQuakeList;