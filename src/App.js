import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.js';
import ValentinePage from './ValentinePage.js'; 
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/valentine" element={<ValentinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
