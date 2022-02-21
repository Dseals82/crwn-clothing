import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from  './components/header/header.component.jsx';




function App() {
  return (
    <div className="App">
    <Header />
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
     </Routes>
    </div>
  );
}

export default App;
