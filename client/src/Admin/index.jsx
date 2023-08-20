import React from 'react';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Category from './pages/Category';
import Brands from './pages/Brands';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import './Admin.css'; // Import the CSS file

export default function Admin() {
  return (
    <div className="admin-container">
      <div className="stars"></div>
      <div className='row m-0 p-0'>
        <SideBar />
        <div className='col-md-11' style={{ paddingLeft: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
