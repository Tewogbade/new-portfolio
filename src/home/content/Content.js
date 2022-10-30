import React from "react";
import tewoPhoto from "../../images/tnew.png";
import "../content/Content.css";
import cv from "../../images/resume.pdf";
import twitter from "../../images/twitter.svg";
import mail from "../../images/envelope.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import Typewriter from "typewriter-effect";

const Content = () => {
  return (
    <div id="allcontent">
      <div id="imagetext">
        <div className="image">
          <img id="tewoPhoto" src={tewoPhoto} alt="" />
        </div>
        <div className="text">
          <h5>Hello World, I am</h5>
          <h1> Tewogbade</h1>
          <img className="" src="" alt="" />

          <h2 className="tyewriter">
            <Typewriter
              options={{
                strings: ["Developer", "Architect", "Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div id="socials">
            <a href="https://twitter.com/mr_tewogbade" target="_blank">
              <img src={twitter} alt="" />
            </a>
            <a href="mailto:tewogbade3008@gmail.com" target="_blank">
              <img src={mail} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/tewogbade-fatai-20662719a/"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
            <a href="https://github.com/Tewogbade" target="_blank">
              <img src={github} alt="" />
            </a>
          </div>

          <a href={cv} target="_blank">
            <button type="button" class="btn btn-outline-dark lg">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
