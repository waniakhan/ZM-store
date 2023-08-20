
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Page404 from './pages/page404';
import ProductPage from './pages/ProductPage';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import Profile from '../Users/components/ProfileCard/Profile'
import CustomCart from './pages/CustomCart'
import UserCategory from './pages/userCategory';

export default function Users() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="/products/category/:categoryName" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<CustomCart />} />
          <Route path="/userCategory" element={<UserCategory />} />

        
          
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
    </>
  );
}
