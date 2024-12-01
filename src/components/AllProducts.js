import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import API_BASE_URL from '../config/apiConfig'; // Import base URL

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/ecom_product/api/v1/product/all/`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
    
        // Prepend API_BASE_URL to image paths
        const updatedProducts = data.products.map((product) => ({
          ...product,
          image: product.image ? `${API_BASE_URL}${product.image}` : "",
        }));
    
        setProducts(updatedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <main className="container my-5">
        <h1 className="text-center mb-4">All Products</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">Error: {error}</p>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card h-100 shadow-sm">
                  {/* Product Image with Link */}
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image || 'https://via.placeholder.com/150'} // Default placeholder image
                      className="card-img-top"
                      alt={`Image of ${product.title}`}
                      style={{ height: '170px', objectFit: 'cover' }}
                    />
                  </Link>

                  {/* Card Body */}
                  <div className="card-body text-center">
                    {/* Title with Link */}
                    <Link to={`/product/${product.id}`} className="text-decoration-none">
                      <h5 className="card-title fw-bold">{product.title}</h5>
                    </Link>
                    <p className="card-text text-muted">${product.price.toFixed(2)}</p>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        title="Add to Cart"
                        className="btn btn-primary btn-sm"
                        aria-label={`Add ${product.title} to cart`}
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                      <button
                        title="Add to Wishlist"
                        className="btn btn-danger btn-sm"
                        aria-label={`Add ${product.title} to wishlist`}
                      >
                        <i className="fa-solid fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default AllProduct;
