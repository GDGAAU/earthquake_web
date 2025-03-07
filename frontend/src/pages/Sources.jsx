import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Sources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 backdrop-blur-md rounded-xl shadow-xl p-6 border border-slate-700"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Sources</h1>
          <p className="text-gray-300 mb-2">
            Our earthquake data is powered by the United States Geological Survey (USGS) Earthquake API.
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>
              <a 
                href="https://earthquake.usgs.gov/fdsnws/event/1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                USGS Earthquake API Documentation
              </a>
            </li>
          </ul>
          <p className="text-gray-300">
            The USGS API provides real-time data for earthquake events across the globe, ensuring our platform is always up-to-date with the latest seismic activity.
          </p>
          <div className="mt-4">
            <Link to="/" className="text-blue-400 hover:underline">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Sources;
