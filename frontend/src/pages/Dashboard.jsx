import React from 'react';
import { motion } from 'framer-motion';
import { GlobeAltIcon, ListBulletIcon, MapIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 shadow-lg border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <GlobeAltIcon className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
             ShakeWatch
            </h1>
          </motion.div>
          <nav>
            <ul className="flex space-x-8 items-center">
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="/home"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <ListBulletIcon className="h-5 w-5" />
                  <span className="font-medium">Lists</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="/safety-guides"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <MapIcon className="h-5 w-5" />
                  <span className="font-medium">Safety Guides</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a
                  href="https://t.me/earth_not_prov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-500 text-slate-900 font-bold rounded-lg hover:bg-blue-600 transition-all duration-200"
                >
                  Join Telegram
                </a>
              </motion.li>
            </ul>
          </nav>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border border-slate-700"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl text-gray-300 mb-6 font-bold">ShakeWatch Dashboard</h2>
            <p className="text-lg text-gray-300 mb-6">
              Welcome to your  <strong className="font-bold">ShakeWatch</strong> Here, you can stay updated with the latest seismic activity. Use the search radius feature to explore earthquake data in your area and stay safe.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We provide real-time earthquake alerts, so you can stay informed and take precautions before and after an event. Whether you're monitoring for safety or tracking trends, our dashboard has you covered.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              You can also find comprehensive safety guidelines to help you protect yourself during an earthquake. Stay safe, stay informed, and be prepared for any situation.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              <strong className="font-bold">Join our Telegram Channel</strong> for real-time earthquake notifications and updates! Be the first to know about seismic activity near you and stay up-to-date with the latest alerts.
            </p>
            <div className="text-center">
              <a 
                href="https://t.me/earth_not_prov"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl px-8 py-4 bg-blue-500 text-slate-900 font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 inline-block"
              >
                <strong>Join our Telegram Channel</strong>
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Dashboard;
