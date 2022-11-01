import React from "react";
import tewoPhoto from "../../images/tnew.png";
import "../content/Content.css";
import twitter from "../../images/twitter.svg";
import mail from "../../images/envelope.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

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
          <div className="dfdfd">
            <div className="tyewriter">
              <Typewriter
                options={{
                  strings: [
                    "A Developer",
                    "An Architect",
                    "A Designer",
                    "A Freelancer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

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

          <Link to="/resume">
            <button class="button">
              <span>View Resume </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
