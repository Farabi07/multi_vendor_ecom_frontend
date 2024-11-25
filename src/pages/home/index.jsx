// Homepage.js
import React from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import CategoryCard from '../../components/CategoryCard';
import SellerCard from '../../components/SellerCard';
import DownloadableProductCard from '../../components/DownloadCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Homepage() {
  return (
    <>
      <Navbar />
      <main className="container my-5">
        {/* Latest Products Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Latest Products</h3>
          <a href="#" className="btn btn-dark">
            View All Products <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
        <div className="row g-4">
          {[1, 2, 3, 4].map((product, index) => (
            <ProductCard key={index} title={`Product ${index + 1}`} price="$99.99" index={index} />
          ))}
        </div>

        {/* Popular Categories Section */}
        <section className="mt-5">
          <h3 className="fw-bold mb-4">Popular Categories</h3>
          <div className="row g-4">
            {['Electronics', 'Fashion', 'Books', 'Home Decor'].map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </section>

        {/* Popular Sellers Section */}
        <section className="mt-5">
          <h3 className="fw-bold mb-4">Popular Sellers</h3>
          <div className="row g-4">
            {[1, 2, 3, 4].map((seller, index) => (
              <SellerCard key={index} name={`Seller ${index + 1}`} />
            ))}
          </div>
        </section>

        {/* Product Download Section */}
        <section className="mt-5">
          <h3 className="fw-bold mb-4">Download Our Products</h3>
          <div className="row g-4">
            {[1, 2, 3].map((product, index) => (
              <DownloadableProductCard key={index} title={`Product ${index + 1}`} description="High-quality product description." />
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; 2024 Product Showcase. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Homepage;
