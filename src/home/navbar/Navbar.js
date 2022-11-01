import React from "react";
import "../navbar/Navbar.css";
import tewoNavphoto from "../../images/tewonav.png";
import cv from "../../images/resume.pdf";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname: exactLocation } = location;
  const checkLocation = exactLocation.split("/");
  console.log(checkLocation);

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
                <Link
                  className={checkLocation[1] === "" ? "active" : ""}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={checkLocation[1] === "portfolio" ? "active" : ""}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={checkLocation[1] === "resume" ? "active" : ""}
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item underline">
                <Link to={cv} target="_blank">
                  <button type="button" class="btn btn-outline-dark">
                    Download CV
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
