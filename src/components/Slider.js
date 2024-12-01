import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import API_BASE_URL from '../config/apiConfig'; // Import base URL
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../pages/home/style.css'
function Slider() {
  const mediaBaseUrl = `${API_BASE_URL}/media/ecom/SliderImage/`;

  return (
    <div id="homepageSlider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={`${mediaBaseUrl}slider1.jpg`} 
            className="d-block w-100 custom-carousel-img"  // Added custom class
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to Our Store</h5>
            <p>Discover amazing products curated just for you!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={`${mediaBaseUrl}slider5.jpg`}
            className="d-block w-100 custom-carousel-img"
            alt="Slide 5"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Latest Products</h5>
            <p>Check out our latest collection of awesome items.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={`${mediaBaseUrl}slider4.jpg`}
            className="d-block w-100 custom-carousel-img"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Exclusive Deals</h5>
            <p>Don't miss out on our exclusive offers and discounts!</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homepageSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homepageSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
