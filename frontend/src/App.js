import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Courseworks from './pages/Courseworks';
import Publications from './pages/Publications';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courseworks" element={<Courseworks />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </Router>
  );
}

export default App; 