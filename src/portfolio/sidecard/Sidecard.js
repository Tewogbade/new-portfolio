import React from "react";
import "../sidecard/Sidecard.css";
import tewocardPhoto from "../../images/tewonav.png";
import room from "../../images/room.jpg";
import timer from "../../images/timer.jpg";
import nasim from "../../images/nasim.jpg";
import meet from "../../images/meet.PNG";
import portfolio2 from "../../images/portfolio2.PNG";
import portfolio from "../../images/portfolio.PNG";
import twitter from "../../images/twitter.svg";
import mail from "../../images/envelope.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import arrow from "../../images/arrow.svg";

const Card = () => {
  return (
    <>
      <div className="allcontent">
        <div className="profile">
          <img src={tewocardPhoto} alt="" />
          <div className="text">
            <h3> Tewogbade S. Tella</h3>
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

        <div className="cards">
          <div className="card">
            <img src={room} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">ROOM</h4>
              <p>
                <i>Furniture and life style</i>
              </p>
              <p>Training project.</p>
              <p>HTML, CSS, JavaScript</p>
              <a href="https://room-web.vercel.app/" target="_blank">
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>

          {/* second card */}

          <div className="card">
            <img src={timer} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">COUNTDOWN TIMER</h4>
              <p>
                <i>Launchig Soon Landing Page</i>
              </p>
              <p>Freelance project</p>
              <p>HTML, CSS, JavaScript</p>
              <a
                href="https://countdown-timer-ebon.vercel.app/ "
                target="_blank"
              >
                View Website <img src={arrow} alt="" />
              </a>
            </div>
          </div>

          {/* third card */}

          <div className="card">
            <img src={nasim} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">NASIMS</h4>
              <p>
                <i>Finace and Management</i>
              </p>
              <p>Training project.</p>
              <p>HTML, CSS, Bootstrap </p>
              <a href="https://nasims-project.vercel.app/" target="_blank">
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>

          {/* fourt card */}

          <div className="card">
            <img src={meet} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">MEET</h4>
              <p>
                <i>Furniture and life style</i>
              </p>
              <p>Training project</p>
              <p>React JS, CSS </p>
              <a href="https://meet-react-eta.vercel.app/" target="_blank">
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>

          {/* first card */}

          <div className="card">
            <img src={portfolio} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">PORTFOLIO</h4>
              <p>
                <i>Furniture and life style</i>
              </p>
              <p>Personal project</p>
              <p>React Js, Bootstrap </p>
              <a
                href="https://new-portfolio-teal-kappa.vercel.app/"
                target="_blank"
              >
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>

          {/* sixth card */}

          <div className="card">
            <img src={portfolio2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">GUESS MY NUMBER</h4>
              <p>
                <i>Game</i>
              </p>
              <p>Training project.</p>
              <p>HTML, CSS, JavaScript </p>
              <a href="#" target="_blank">
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
