

// src/App.js
import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import GoodsForm from './components/GoodsForm';
import GoodsSeek from './components/GoodsSeek';
import DisplayGoods from './components/DisplayGoods';

import ServiceForm from './components/ServiceForm';
import ServiceSeek from './components/ServiceSeek';
import DisplayServices from './components/DisplayServices';

import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <Routes>
          <Route path='/login' element = {<Login />} />
          <Route   path="/dash" element={<Dashboard />} />
          <Route  path="/service-form" element= {<ServiceForm />} />
          <Route  path="/goods-form" element= {<GoodsForm />} />
          <Route path="/goods-seek" element = {<GoodsSeek />} />
          <Route path="/goods-display" element = {<DisplayGoods />} />

          <Route  path="/services-form" element= {<ServiceForm />} />
          <Route path="/services-seek" element = {<ServiceSeek />} />
          <Route path="/services-display" element = {<DisplayServices />} />
          
          
          </Routes>
        
       
      </div>
    </Router>
  );
}

export default App;

