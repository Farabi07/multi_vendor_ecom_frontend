import React from 'react';
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer';
import AllCategory from '../../components/AllCategory';

const Category = () => {
  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="container my-5">
        <AllCategory/>
      </div>
      <Footer/>
    </>
  );
};

export default Category;
