import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm">
    <nav
  className="navbar navbar-expand-lg sticky-top shadow-sm"
  style={{ backgroundColor: '#FFFFFF', color: '#FFFBC6' }}
>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Product Showcase</Link> {/* Use Link instead of a */}
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
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <Link className="nav-link active fw-semibold" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/category">Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
