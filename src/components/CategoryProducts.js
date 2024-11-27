import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';

const CategoryProducts = () => {
  // Sample data for categories, now including a unique `id` for each product
  const allCategories = Array.from({ length: 20 }, (_, index) => ({
    title: `Category ${index + 1}`,
    price: `$${(index + 1) * 10}.00`,
    productId: index + 1,  // Add a unique product ID
  }));

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 4; // Number of categories per page

  // Calculate start and end indices for the current page
  const startIndex = (currentPage - 1) * categoriesPerPage;
  const endIndex = startIndex + categoriesPerPage;

  // Get current page categories
  const currentCategories = allCategories.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(allCategories.length / categoriesPerPage);

  // Pagination Handlers
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="container my-5">
      {/* All Categories Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">All Categories</h3>
      </div>
      <div className="row g-4">
        {currentCategories.map((category) => (
          <ProductCard
            key={category.productId}  // Ensure unique key using `productId`
            title={category.title}
            price={category.price}
            productId={category.productId} // Pass `productId` to the ProductCard
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex flex-column align-items-center mt-4">
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`btn ${
                currentPage === index + 1 ? 'btn-secondary' : 'btn-outline-primary'
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <span className="fw-bold mt-3">
          Page {currentPage} of {totalPages}
        </span>
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
    </main>
  );
};

export default CategoryProducts;
