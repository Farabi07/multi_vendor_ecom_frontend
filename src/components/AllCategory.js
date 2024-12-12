import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import API_BASE_URL from '../config/apiConfig'; 

const AllCategory = () => {
  const [allCategories, setAllCategories] = useState([]); // State for all categories
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const categoriesPerPage = 4; // Number of categories per page

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/ecom_product_category/api/v1/product_category/all/`
        );
        // Assuming API response contains a "products" array
        setAllCategories(response.data.products);
      } catch (err) {
        setError("Failed to fetch categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <main className="container my-5">
      {/* All Categories Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">All Categories</h3>
      </div>
      <div className="row g-4">
        {currentCategories.map((category) => (
          <ProductCard
            key={category.id} // Use unique ID from API response
            title={category.title} // Use "title" from API response
            details={category.details} // Use "details" from API response
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
                currentPage === index + 1 ? "btn-secondary" : "btn-outline-primary"
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
          {["Electronics", "Fashion", "Books", "Home Decor"].map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AllCategory;
