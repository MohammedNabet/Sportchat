// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Create this CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
