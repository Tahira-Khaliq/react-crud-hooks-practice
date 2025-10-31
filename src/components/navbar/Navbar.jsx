import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import primaryLogo from "../../assets/download.jpeg";

function Navbar() {
  const [navItems] = useState([
    { title: "Home", path: "/" },
    // { title: "Sales", path: "/sales" },
    // { title: "Products", path: "/products" },
    { title: "Categories", path: "/categories" },
    // { title: "About Us", path: "/about-us" },
  ]);

  return (
    <header className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={primaryLogo} alt="Meer & Sons Marts Logo" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="navbar-menu">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="nav-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Section */}
      <div className="navbar-right">
        <p>Search</p>
        <p>Contact</p>
        <p>Support</p>
      </div>
    </header>
  );
}

export default Navbar;
