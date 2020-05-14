import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg job-nav">
      <Link to="/">
        <span className="navbar-brand mb-0 h1" id="brand-format">
          job <span id="brand-two">init</span>
        </span>
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link nav-link-job" to="/login">
              login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-job" to="/signup">
              signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-job" to="/account">
              account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-job" to="/dashboard">
              dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link nav-link-job" to="/login">
              logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
