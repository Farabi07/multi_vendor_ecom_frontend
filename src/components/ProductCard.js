import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link for navigation

function ProductCard({ title, price, index, image, categorySlug, productId }) {
  return (
    <div className="col-md-3">
      <div className="card h-100 shadow-sm">
        {/* Product Image with Link */}
        <Link to={`/category/product/${productId}`}>
          <img
            src={image || 'https://via.placeholder.com/150'} // Default placeholder image if no image is provided
            className="card-img-top"
            alt={`Image of ${title}`}
            style={{ height: '150px', objectFit: 'cover' }}
          />
        </Link>

        {/* Card Body */}
        <div className="card-body text-center">
          {/* Title with Link */}
          <Link to={`/category/product/${productId}`} className="text-decoration-none">
            <h5 className="card-title fw-bold">{title}</h5>
          </Link>
          <p className="card-text text-muted">{price}</p>

          {/* Action Buttons */}
          <div className="d-flex justify-content-center gap-2">
            <button
              title="Add to Cart"
              className="btn btn-primary btn-sm"
              aria-label={`Add ${title} to cart`}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button
              title="Add to Wishlist"
              className="btn btn-danger btn-sm"
              aria-label={`Add ${title} to wishlist`}
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Prop validation
ProductCard.propTypes = {
  title: PropTypes.string.isRequired, // Title of the product
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Price of the product
  index: PropTypes.number.isRequired, // Index of the product
  image: PropTypes.string, // Optional image URL
  categorySlug: PropTypes.string.isRequired, // Category slug
  productId: PropTypes.number.isRequired, // Unique ID for the product
};

export default ProductCard;
