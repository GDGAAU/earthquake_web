import React from 'react';
import { motion } from 'framer-motion';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

function SafetyGuides() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 shadow-lg border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Safety Guides
          </h1>
        </div>
      </motion.header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">During an Earthquake</h2>
          <p className="text-gray-300">
            Drop, Cover, and Hold On. Get under a sturdy piece of furniture and protect your head and neck.
          </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">After an Earthquake</h2>
          <p className="text-gray-300">
            Check yourself for injuries and move carefully in case of aftershocks. Verify gas leaks and electrical hazards.
          </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Preparation Tips</h2>
          <p className="text-gray-300">
            Store emergency supplies, secure heavy furniture, and establish a family emergency plan.
          </p>
        </div>
      </main>
    </div>
  );
}

export default SafetyGuides;