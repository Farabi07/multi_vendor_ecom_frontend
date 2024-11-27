import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

const ProductsCategory = () => {
  const { category_slug, category_id } = useParams(); // Extract params from URL
  const [products, setProducts] = useState([]); // State for category-specific products
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate fetching category products (replace with API in the future)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // Simulated products for the category
      const fetchedProducts = Array.from({ length: 8 }, (_, index) => ({
        title: `${category_slug.replace('-', ' ')} Product ${index + 1}`,
        price: `$${(index + 1) * 15}.00`,
        image: `https://via.placeholder.com/150?text=${category_slug}+${index + 1}`,
      }));
      setProducts(fetchedProducts);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, [category_slug]);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Products in {category_slug.replace('-', ' ')}</h1>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="row g-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                index={index}
              />
            ))}
          </div>
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductsCategory;
