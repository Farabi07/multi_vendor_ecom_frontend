import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import ProductCard from '../../components/ProductCard';
import CategoryCard from '../../components/CategoryCard';
import SellerCard from '../../components/SellerCard';
import DownloadableProductCard from '../../components/DownloadCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';  // Import the custom CSS

function Homepage() {
  // Sample products for pagination
  const allProducts = Array.from({ length: 20 }, (_, index) => ({
    title: `Product ${index + 1}`,
    price: `$${(index + 1) * 10}.00`,
  }));

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const productsPerPage = 4; // Number of products per page

  // Calculate indices for slicing products array
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  // Total number of pages
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  // Pagination Handlers
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <Slider /> {/* Add the slider component */}

      {/* Main Content */}
      <main className="container my-5">
        {/* Latest Products Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Latest Products</h3>
          <a href="#" className="btn btn-dark">
            View All Products <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {currentProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              index={startIndex + index}
              className="col-3"
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePrev}>
                  &laquo; Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageClick(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handleNext}>
                  Next &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Popular Categories Section */}
        <section className="mt-5">
          <h3 className="fw-bold mb-4">Popular Categories</h3>
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
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; 2024 Product Showcase. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Homepage;
