import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-logo">MEER & SONS</h2>
          <p>
           Meer & Sons Marts — Your trusted destination for quality products at affordable prices.
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: ameerhamzag75@gmail.com</p>
          <p>Phone: +92 304 7533 611</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MEER & SONS. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
