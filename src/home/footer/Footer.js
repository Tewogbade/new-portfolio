import React from "react";
import "../footer/Footer.css";
import mail from "../../images/envelope.svg";
import telephone from "../../images/telephone.svg";
import location from "../../images/geo.svg";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="title">
          <h6>Email</h6>
          <p>tewogbade3008@gmail.com</p>
        </div>
        <div className="title" id="middle">
          <h6>Contact</h6>
          <p>+234-8189-733-799</p>
        </div>
        <div className="title">
          <h6>Location</h6>
          <p>Lagos, Nigeria</p>
        </div>

        <div className="mobile">
          <h6>Contact me</h6>
          <div className="icontext">
            <img src={mail} alt="" />
            <p>tewogbade3008@gmail.com</p>
          </div>
          <div className="icontext">
            <img src={telephone} alt="" />
            <p>+234-8189-733-799</p>
          </div>
          <div className="icontext">
            <img src={location} alt="" />
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
