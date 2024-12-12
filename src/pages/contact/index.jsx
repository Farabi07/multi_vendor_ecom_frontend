import React, { useState } from 'react';
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import './style.css';
import API_BASE_URL from '../../config/apiConfig.js';

const Contact = () => {
  const mediaBaseUrl = `${API_BASE_URL}/media/ecom/ContactImage/`;

  // State to manage form data
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const { full_name, phone, email, subject, message } = formData;
    if (!full_name || !phone || !email || !subject || !message) {
      setErrorMessage('All fields are required.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Send the POST request to the API
      const response = await fetch(`${API_BASE_URL}/contact/api/v1/contact/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // On success, display a success message
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ full_name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        // On error, display the error message from the API
        setErrorMessage(data.detail || 'Something went wrong, please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while sending the message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <section className="contact-page">
        {/* Hero Section with Image and Text Overlay */}
        <div className="">
          <img
            src={`${mediaBaseUrl}contact1.jpg`} // Directly use the image path
            alt="Contact"
            className="img-fluid w-100"
            style={{ height: '400px', objectFit: 'cover', borderRadius: '8px' }}
          />
          {/* Overlay Text */}
          <div className="overlay-text">
            <h1>We’re Here to Help!</h1>
            <p>Reach out to us with any questions or inquiries.</p>
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="container my-5">
          <div className="row align-items-center">
            {/* Contact Information */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold">Contact Information</h2>
              <p className="text-muted">You can reach us via the following:</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-envelope-fill text-primary me-3"></i>
                  <strong>Email:</strong> support@myvendorwebsite.com
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone-fill text-primary me-3"></i>
                  <strong>Phone:</strong> +1 234 567 8900
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill text-primary me-3"></i>
                  <strong>Address:</strong> 123 Vendor Lane, Business City, Country
                </li>
              </ul>
            </div>

            {/* Compact Contact Form */}
            <div className="col-lg-6">
              <div className="card shadow-sm p-4">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      className="form-control"
                      placeholder="Full Name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="3"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                  {successMessage && <p className="alert alert-success">{successMessage}</p>}
                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default Contact;
