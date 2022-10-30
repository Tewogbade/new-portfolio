import React from "react";
import tewoPhoto from "../../images/tnew.png";
import "../content/Content.css";
import cv from "../../images/JavaScript.docx";
import TypeWriterEffect from "react-typewriter-effect";
import twitter from "../../images/twitter.svg";
import mail from "../../images/envelope.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

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
          <div className="typewriter">
            <TypeWriterEffect
              className="typefont"
              textStyle={{
                fontFamily: "Montserrat",
                color: "#000000",
                fontWeight: 400,
                fontSize: "2.5rem",
                justifyContent: "center",
              }}
              startDelay={0}
              cursorColor="#3F3D56"
              multiText={["Developer", "Architect", "Designer", "Freelancer"]}
              multiTextDelay={2000}
              typeSpeed={50}
            />
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
