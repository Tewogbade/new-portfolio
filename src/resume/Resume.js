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
        <div className="profile">
          <img src={tewocardPhoto} alt="" />
          <div className="text">
            <h3> Tewogbade S. Tella</h3>
            <p> Web Developer | Architect</p>
            <div className="links">
              <a href="https://twitter.com/mr_tewogbade">
                <img src={twitter} alt="" />
              </a>
              <a href="mailto:tewogbade3008@gmail.com">
                <img src={mail} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/tewogbade-fatai-20662719a/">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://github.com/Tewogbade">
                <img src={github} alt="" />
              </a>
            </div>
            <div id="lasttext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt quisquam, mollitia totam architecto animi nihil?
              </p>
            </div>
            <div className="copyright">
              <p>©2022 Tewogbade Tella.</p>
            </div>
          </div>
        </div>

        <div className="resume">
          <div className="pair">
            <div className="left">
              <h1> Tewogbade S. Tella</h1>
              <h3> Web Developer | Architect</h3>
            </div>
            <div className="right">
              <h3>tewogbade3008@gmail</h3>
              <p>08189733799, 08135201213</p>
            </div>
            <div>
              <p></p>
            </div>
          </div>

          <div className="pair">
            <div className="left">
              <h2>
                EDUCATION : <br />& <br />
                TRAINGING
              </h2>
            </div>
            <div className="right">
              <h4>Tech Accent Creatives</h4>
              <p>Lagos, Nigeria</p>
              <h6>JavaScript Full-Stack, 2022</h6>
              <h4>University of Ilorin </h4>
              <p>Ilorin, Nigeria</p>
              <h6>BSc. Architecture, 2018</h6>
              <h4>Yaba college of Education </h4>
              <p>Lagos, Nigeria</p>
              <h6>ND. Architecture, 2013</h6>
            </div>
            <div>
              <p></p>
            </div>
          </div>

          <div className="pair">
            <div className="left">
              <h2>EXPERIENCE :</h2>
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
              <h2>SKILLS :</h2>
            </div>
            <div className="right">
              <div className="skills">
                <h6>HTML/CSS</h6>
                <h6>
                  JavaScript/ <br />
                  jQuery
                </h6>
                <h6>Frameworks </h6>
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
                <h6>Web Performancet</h6>
                <h6>
                  Version <br />
                  Control/Git
                </h6>
                <h6>Command Line</h6>
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
