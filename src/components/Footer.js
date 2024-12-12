import React from 'react';
import '../pages/contact/style.css'

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2024 Product Showcase. All rights reserved.{' '}
        <a href="#" className="footer-link">
          Privacy Policy
        </a>
        {' | '}
        <a href="#" className="footer-link">
          Terms of Use
        </a>
      </p>
    </footer>
  );
};

export default Footer;
