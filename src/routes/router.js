import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/home';
import Contact from '../pages/contact';
import Category from '../pages/category';
import ProductsCategory from '../pages/category/ProductsCategory';
import AllProduct from '../components/AllProducts';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="contact/" element={<Contact/>} />
        <Route path="category/" element={<Category/>} />
        <Route path="products/" element={<AllProduct/>} />
        <Route path="category/:category_slug/:category_id/" element={<ProductsCategory/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
