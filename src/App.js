import logo from './logo.svg'; // Replace with your actual product image URLs if available
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Product Showcase</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ '--bs-scroll-height': '100px' }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <main className="container my-5 flex-grow-1">
        <h3 className="mb-4 text-center">Latest Products</h3>
        <div className="row g-4">
          {/* Map through products to display them dynamically */}
          {[1, 2, 3, 4].map((product, index) => (
            <div key={index} className="col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={logo} // Replace with actual product image URLs
                  className="card-img-top"
                  alt="Product"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Product {index + 1}</h5>
                  <p className="card-text text-muted">$99.99</p>
                  <div className="d-flex justify-content-center gap-2">
                    <button
                      title="Add to Cart"
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button
                      title="Add to Wishlist"
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; 2024 Product Showcase. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
