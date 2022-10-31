import React from "react";
import "../resume/Resume.css";
import tewocardPhoto from "../images/tewonav.png";
import twitter from "../images/twitter.svg";
import mail from "../images/envelope.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

const Resume = () => {
  return (
    <>
      <div className="allcontent">
        <div className="profile" id="about">
          <img src={tewocardPhoto} alt="" />
          <div className="text">
            <h3> Tewogbade S. Fatai</h3>
            <p> Web Developer | Architect</p>
            <div className="links">
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
            <div id="lasttext">
              <p>
                A Web Developer and an Architect with strong analytical,
                management and communication skills, who continuously seeks
                opportunities to expand his knowledge and develop hard skills in
                a dynamic and professional environment.
              </p>
            </div>
            <div className="copyright">
              <p>©2022 Tewogbade Tella.</p>
            </div>
          </div>
        </div>

        <div className="resume">
          <h1> Tewogbade S. Fatai</h1>
          <h4> Web Developer | Architect</h4>
          <p id="email">tewogbade3008@gmail</p>
          <p id="phoneno">08189733799, 08135201213</p>

          <div className="pair">
            <div className="left">
              <h2>EDUCATION-</h2>
            </div>
            <div className="right">
              <h4>Tech Accent Creatives</h4>
              <p>Lagos, Nigeria</p>
              <h6>JavaScript Full-Stack</h6>
              <h4>University of Ilorin </h4>
              <p>Ilorin, Nigeria</p>
              <h6>BSc. Architecture</h6>
              <h4>Yaba college of Education </h4>
              <p>Lagos, Nigeria</p>
              <h6>ND. Architecture</h6>
            </div>
            <div>
              <p></p>
            </div>
          </div>

          <div className="pair">
            <div className="left">
              <h2>EXPERIENCE-</h2>
            </div>
            <div className="right">
              <h4>
                Web Development intern <span> Tech Accent Creatives</span>
              </h4>
              <p> July 2022 - till date</p>
              <h6>
                Assist in writing well designed, testable, efficient code by
                using best software development practices. Assist in creating
                website layout/user interface by using standard HTML/CSS
                practices. Assist in integrating data from various back-end
                services and databases.
              </h6>
              <h4>
                Lead Architect <span> Atrium Architecture and Designs.</span>
              </h4>
              <p> July 2022 - till date</p>
              <h6>
                Design building plans that fits all construction requirements
                which using various architectural software; AutoCAD
                Architecture, Revit Architecture, Lumion. Engaged with clients,
                consultants and contractors during construction bidding.
              </h6>

              <h4>
                Design Architect <span> Luca Visage – Scavolini.</span>
              </h4>
              <p> June 202 - till date</p>
              <h6>
                Successfully managed high-end kitchen showroom and also carried
                different phases of sales transactions. Assisted in creating a
                strong visual appearance of the showroom by effective executing
                merchandise plans and strategies. Designed and executed high-end
                kitchens for various clients
              </h6>
            </div>
          </div>
          <div className="pair">
            <div className="left">
              <h2>SKILLS-</h2>
            </div>
            <div className="right">
              <div className="skills">
                <h6>HTML/CSS</h6>
                <h6>
                  JavaScript/ <br />
                  jQuery
                </h6>
                <h6>Boostrap </h6>
                <h6>
                  Responsive <br />
                  Design
                </h6>
                <h6>
                  Version <br />
                  Control/Git
                </h6>
                <h6>
                  Testing/
                  <br />
                  Debugging{" "}
                </h6>
                <h6>React JS</h6>
                <h6>Angular JS</h6>
                <h6>Node JS</h6>
                <h6>Express JS</h6>
                <h6>Redux</h6>
                <h6>MongoDB</h6>
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
