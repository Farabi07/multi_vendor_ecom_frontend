// components/Slider.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
  return (
    <div id="homepageSlider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://via.placeholder.com/1200x400?text=Welcome+to+Our+Store"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to Our Store</h5>
            <p>Discover amazing products curated just for you!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1200x400?text=Latest+Products"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Latest Products</h5>
            <p>Check out our latest collection of awesome items.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1200x400?text=Exclusive+Deals"
            className="d-block w-100"
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
