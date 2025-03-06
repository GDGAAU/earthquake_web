import React, { useState, useEffect } from 'react';
import EarthQuakeList from '../components/EarthQuakeList';
import { fetchEarthquakeData } from '../utils/api_fetch';

function Home() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [radius, setRadius] = useState(1000);

  async function getData() {
    const data = await fetchEarthquakeData(radius);
    setEarthquakes(data);
  }

  useEffect(() => {
    getData();
  }, [radius]);

  return (
    <div>
      <header className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-700 to-indigo-700 shadow-lg">
        <h1 className="text-3xl font-extrabold text-white">EarthQuake</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#list" className="text-white font-medium hover:underline">
                List
              </a>
            </li>
            <li>
              <a href="#map" className="text-white font-medium hover:underline">
                Map
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="p-4 bg-gradient-to-r from-black to-blue-900">
        <div className="mb-4">
          <label htmlFor="radiusInput" className="block text-white font-medium mb-2">
            Enter a search radius (in kilometers) to limit the earthquake data:
          </label>
          <input
            id="radiusInput"
            type="number"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="p-2 rounded border border-gray-300"
          />
        </div>
        {earthquakes.length > 0 ? (
          <EarthQuakeList earthquakes={earthquakes} />
        ) : (
          <p className="text-white">Loading earthquake data...</p>
        )}
      </div>
    </div>
  );
}

export default Home;