import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EarthQuakeList from '../components/EarthQuakeList';
import Header from '../components/Header';
import { fetchEarthquakeData } from '../utils/api_fetch';
import { GlobeAltIcon, MapIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Home() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [radius, setRadius] = useState(1000);
  const [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(true);
    const data = await fetchEarthquakeData(radius);
    setEarthquakes(data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [radius]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border border-slate-700"
        >
          <div className="max-w-xl">
            <label htmlFor="radiusInput" className="block text-gray-300 font-medium mb-2">
              Search Radius (kilometers)
            </label>
            <div className="relative">
              <input
                id="radiusInput"
                type="number"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                max={20000}
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 text-white border border-slate-600 focus:border-blue-400 focus:ring focus:ring-blue-400/20 transition-all duration-200"
                placeholder="Enter radius..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-400">km</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent"
              />
            </div>
          ) : earthquakes.length > 0 ? (
            <EarthQuakeList earthquakes={earthquakes} />
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <GlobeAltIcon className="mx-auto h-16 w-16 text-gray-400" />
              <p className="mt-4 text-lg text-gray-300">No earthquakes found in the specified radius.</p>
            </motion.div>
          )}
        </div>
      </main>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-4"
      >
        <a 
          href="https://t.me/earth_not_prov"
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-400 text-slate-900 font-bold rounded hover:bg-blue-500 transition-colors duration-200 inline-block"
        >
          Join our Telegram channel for latest notifications
        </a>
      </motion.div>
    </div>
  );
}

export default Home;