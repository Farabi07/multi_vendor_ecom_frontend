// CategoryCard.js
import React from 'react';

function CategoryCard({ category }) {
  return (
    <div className="col-md-3">
      <div className="card h-100 bg-light text-center shadow-sm">
        <div className="card-body">
          <h5 className="card-title fw-bold">{category}</h5>
          <a href="#" className="btn btn-outline-primary">
            Explore <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
