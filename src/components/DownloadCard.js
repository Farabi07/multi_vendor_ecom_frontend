// DownloadableProductCard.js
import React from 'react';

function DownloadableProductCard({ title, description }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img
          src="" // Placeholder image URL
          className="card-img-top"
          alt="Downloadable Product"
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <a href="#" className="btn btn-success" download>
            <i className="fa-solid fa-download me-2"></i>Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadableProductCard;
