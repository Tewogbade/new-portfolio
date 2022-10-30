import React from "react";
import "../navbar/Navbar.css";
import tewoNavphoto from "../../images/tewonav.png";
import logo from "../../images/logo.png";
import cv from "../../images/JavaScript.docx";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="imagediv container-fluid">
          <img src={tewoNavphoto} className="" alt="" />
          {/* <img src={logo} className="" alt="" />
          <h1>TEWO</h1> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a href={cv}>
                  <button type="button" class="btn btn-outline-dark">
                    Download CV
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
