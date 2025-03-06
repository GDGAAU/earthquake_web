import React from 'react';
import { motion } from 'framer-motion';

function EarthQuakeCard({ location, magnitude, latitude, longitude, distance, time }) {
  const formattedTime = time ? new Date(time).toLocaleString() : 'N/A';
  
  const getMagnitudeColor = (mag) => {
    if (mag >= 7) return 'text-red-400';
    if (mag >= 5) return 'text-orange-400';
    if (mag >= 3) return 'text-yellow-400';
    return 'text-emerald-400';
  };

  const getMagnitudeBorder = (mag) => {
    if (mag >= 7) return 'border-red-500/50';
    if (mag >= 5) return 'border-orange-500/50';
    if (mag >= 3) return 'border-yellow-500/50';
    return 'border-emerald-500/50';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`w-full bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl border ${getMagnitudeBorder(magnitude)}`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-white flex-1">{location}</h2>
          <div className={`px-3 py-1 rounded-full ${getMagnitudeColor(magnitude)} bg-slate-700/50`}>
            {magnitude}
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Distance</span>
            <span className="text-white font-medium">{distance} km</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Coordinates</span>
            <span className="text-white font-medium">
              {latitude.toFixed(4)}, {longitude.toFixed(4)}
            </span>
          </div>
          
          <div className="pt-3 border-t border-slate-700">
            <span className="text-gray-400 text-sm">Recorded at</span>
            <div className="text-blue-400 font-medium">{formattedTime}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EarthQuakeCard;