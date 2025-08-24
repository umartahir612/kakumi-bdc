import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Close navbar when a link is clicked
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "var(--brand-blue)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo.png" // <-- change to your logo path
            alt="Kakumi BDC"
            style={{ height: "30px", marginRight: "10px" }}
          />
          KAKUMI BDC LTD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeNavbar}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rates" onClick={closeNavbar}>
                Rates
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/compliance" onClick={closeNavbar}>
                Compliance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
