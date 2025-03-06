import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SafetyGuides from './pages/SafetyGuides';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/safety-guides" element={<SafetyGuides />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
