import React from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage.component';
import {Routes, Route } from 'react-router-dom';
import HatsComponent from './components/hats/hats.component';




function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='shop/hats' element={<HatsComponent />} />
      
      
     </Routes>
    </div>
  );
}

export default App;
