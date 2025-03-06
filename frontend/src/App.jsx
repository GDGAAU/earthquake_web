import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SafetyGuides from './pages/SafetyGuides';
import previous from './pages/previous';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/safety-guides" element={<SafetyGuides />} />

        <Route path="/previous" element={<previous/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
