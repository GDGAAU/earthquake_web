import React from 'react';
import { GlobeAltIcon, CheckCircleIcon, ExclamationTriangleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

function SafetyGuides() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">During an Earthquake</h2>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2"/>
              Drop, Cover, and Hold On. Get under a sturdy piece of furniture and protect your head and neck.
            </li>
            <li className="flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2"/>
              If outdoors, move to an open area away from buildings, trees, and power lines.
            </li>
            <li className="flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2"/>
              If driving, stop safely and stay inside the vehicle until shaking stops.
            </li>
            <li className="flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2"/>
              Avoid standing near windows, mirrors, and objects that may shatter.
            </li>
            <li className="flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2"/>
              Do not use elevators, as they may become stuck or malfunction.
            </li>
          </ul>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">After an Earthquake</h2>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2"/>
              Check yourself and others for injuries and provide first aid if necessary.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2"/>
              Be cautious of falling debris and aftershocks, which may follow the main quake.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2"/>
              Inspect your surroundings for hazards such as gas leaks, broken glass, and unstable structures.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2"/>
              Avoid using open flames if you suspect a gas leak and shut off the main gas valve if necessary.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2"/>
              Use battery-powered radios or mobile alerts to stay updated on emergency information.
            </li>
          </ul>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Safety Precautions</h2>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center">
              <ShieldCheckIcon className="h-5 w-5 text-blue-400 mr-2"/>
              Follow official safety guidelines and evacuate if instructed by emergency services.
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="h-5 w-5 text-blue-400 mr-2"/>
              Avoid bridges and overpasses, as they may be structurally weakened.
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="h-5 w-5 text-blue-400 mr-2"/>
              Be mindful of landslides and tsunamis if you are in a coastal or mountainous area.
            </li>
          </ul>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Preparation Tips</h2>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center">
              <GlobeAltIcon className="h-5 w-5 text-yellow-400 mr-2"/>
              Store emergency supplies, including water, non-perishable food, first aid kits, and flashlights.
            </li>
            <li className="flex items-center">
              <GlobeAltIcon className="h-5 w-5 text-yellow-400 mr-2"/>
              Secure heavy furniture and appliances to prevent tipping during an earthquake.
            </li>
            <li className="flex items-center">
              <GlobeAltIcon className="h-5 w-5 text-yellow-400 mr-2"/>
              Establish a family emergency plan, including communication and evacuation routes.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default SafetyGuides;
