import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import ProductCard from '../../components/ProductCard';
import CategoryCard from '../../components/CategoryCard';
import SellerCard from '../../components/SellerCard';
import DownloadableProductCard from '../../components/DownloadCard';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';  // Import the custom CSS
import Footer from '../../components/Footer';

function Homepage() {
  const [latestProducts, setLatestProducts] = useState([]); // State for latest products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch latest products from the API
  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await fetch('http://192.168.68.125:8003/ecom_product/api/v1/product/latest_product/');
        if (!response.ok) {
          throw new Error('Failed to fetch latest products');
        }
        const data = await response.json();
        setLatestProducts(data.latest_products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Slider /> {/* Add the slider component */}

      {/* Main Content */}
      <main className="container my-5">
        {/* Latest Products Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Latest Products</h3>
          <a className="btn btn-dark">
            <Link to="/products" className="text-white text-decoration-none">
              View All Products
            </Link>
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Loading and Error Handling */}
        {loading && <p>Loading latest products...</p>}
        {error && <p className="text-danger">Error: {error}</p>}

        {/* Display Latest Products */}
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {!loading && !error && latestProducts.length === 0 && (
            <p>No products found</p>
          )}
          {latestProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price || 'N/A'} // Handle null price
              className="col-3"
            />
          ))}
        </div>

        {/* Popular Categories Section */}
        <section className="mt-5">
          <h3 className="fw-bold mb-4">Top Categories</h3>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {['Electronics', 'Fashion', 'Books', 'Home Decor'].map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </section>

        {/* Popular Sellers Section */}
        <section className="mt-5">
          <h3 className="fw-bold mb-4">Popular Sellers</h3>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {[1, 2, 3, 4].map((seller, index) => (
              <SellerCard key={index} name={`Seller ${index + 1}`} />
            ))}
          </div>
        </section>

        {/* Product Download Section */}
        <section className="mt-5">
          <h3 className="fw-bold mb-4">Download Our Products</h3>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {[1, 2, 3].map((product, index) => (
              <DownloadableProductCard
                key={index}
                title={`Product ${index + 1}`}
                description="High-quality product description."
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Homepage;
