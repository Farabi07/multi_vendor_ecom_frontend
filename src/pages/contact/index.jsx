import React from 'react';
import Navbar from '../../components/Navbar'; // Import Navbar

const Contact = () => {
  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="container my-5">
        <h1 className="fw-bold">Contact</h1>
        <p>Browse through our categories and find what you need.</p>
      </div>
    </>
  );
};

export default Contact;
