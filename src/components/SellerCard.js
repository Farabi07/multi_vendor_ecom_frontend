// SellerCard.js
import React from 'react';

function SellerCard({ name }) {
  return (
    <div className="col-md-3">
      <div className="card h-100 shadow-sm">
        <img
          src="" // Placeholder image URL
          className="card-img-top rounded-circle mx-auto mt-3"
          alt="Seller"
          style={{ height: '100px', width: '100px', objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text text-muted">100+ Products</p>
          <a href="#" className="btn btn-primary btn-sm">
            Visit Store <i className="fa-solid fa-store ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SellerCard;
