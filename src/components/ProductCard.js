// ProductCard.js
import React from 'react';

function ProductCard({ title, price, index }) {
  return (
    <div className="col-md-3">
      <div className="card h-100 shadow-sm">
        <img
          src="" // Placeholder image URL
          className="card-img-top"
          alt="Product"
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">${price}</p>
          <div className="d-flex justify-content-center gap-2">
            <button title="Add to Cart" className="btn btn-primary btn-sm">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button title="Add to Wishlist" className="btn btn-danger btn-sm">
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
