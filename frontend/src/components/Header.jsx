import React from 'react'
import { MapIcon, ListBulletIcon, DocumentTextIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 shadow-lg border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <GlobeAltIcon className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ShakeWatch
            </h1>
          </motion.div>
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link
                to="/home"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <ListBulletIcon className="h-5 w-5" />
                <span className="font-medium">List</span>
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
              <Link
                to="/sources"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <DocumentTextIcon className="h-5 w-5" />
                <span className="font-medium">Sources</span>
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a
                href="https://t.me/earth_not_prov"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-400 text-slate-900 font-bold rounded hover:bg-blue-500 transition-colors duration-200"
              >
                Join Telegram
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}