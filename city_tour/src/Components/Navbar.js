import React from "react";
import logo from "../logo.svg";
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tour logo" />
      <ul className="nav_links">
          <li><a href="/" className="nav_link" >Home</a></li>
          <li><a href="/" className="nav_link active" >Tours</a></li>
          <li><a href="/" className="nav_link" >About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
