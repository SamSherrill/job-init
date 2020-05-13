import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar job-nav">
      <Link to="/">
      <span class="navbar-brand mb-0 h1" id="brand-format">
        job <span id="brand-two">init</span>
      </span>
      </Link>
    </nav>
  );
};

export default Navbar;
