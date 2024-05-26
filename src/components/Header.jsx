import React from "react";
import logo from "../Assets/logo.svg";

export default function Header({ PopShow }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  sticky-top pt-3">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" />{" "}
            <span className="ps-3 fw-bold">MatchBrands</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="logo" />{" "}
                <span className="ps-3 fw-bold">MatchBrands</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body align-items-center justify-content-between">
              <div className="ps-3 d-flex justify-content-center align-items-center">
                <ul className="navbar-nav nav-links flex-grow-1 gap-4 ps-5 ">
                  <li className="nav-item" style={{ color: "#D99EB4" }}>
                    Home
                  </li>
                  <li className="nav-item">About Us</li>
                  <li className="nav-item">Services</li>
                  <li className="nav-item">Blogs</li>
                </ul>
              </div>
              <div className="ps-3 d-flex justify-content-center align-items-center">
                <ul className="navbar-nav nav-links align-items-center justify-content-start flex-grow-1 gap-4 pe-3 pt-3">
                  <li className="nav-item">Pricing</li>
                  <li className="nav-item" onClick={PopShow}>
                    Login
                  </li>
                  <li className="nav-item btn-1" onClick={PopShow}>
                    Signup
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
