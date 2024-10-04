import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Courseworks from './pages/Courseworks/Courseworks';
import Publications from './pages/Publications/Publications';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/courseworks" element={<Courseworks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
