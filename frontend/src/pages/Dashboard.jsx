import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';


function Dashboard() {
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
