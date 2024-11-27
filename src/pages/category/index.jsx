import React from 'react';
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer';
import CategoryProducts from '../../components/CategoryProducts';

const Category = () => {
  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="container my-5">
        <CategoryProducts/>
      </div>
      <Footer/>
    </>
  );
};

export default Category;
