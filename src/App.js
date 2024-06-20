import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FoodDetails from './components/FoodDetails';
import './i18n' ;
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/type/:id" element={<FoodDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
