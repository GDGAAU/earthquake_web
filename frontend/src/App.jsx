import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SafetyGuides from './pages/SafetyGuides';
import EarthquakeRisk from './pages/EarthquakeRisk';
import Sources from './pages/Sources';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/safety-guides" element={<SafetyGuides />} />
        <Route path="/earthquake-risk" element={<EarthquakeRisk />} />
        <Route path="/sources" element={<Sources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
