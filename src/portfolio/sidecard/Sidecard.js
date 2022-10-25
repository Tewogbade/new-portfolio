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
        <div className="cards">
          <div className="card">
            <img src={room} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-text">ROOM</h5>
              <p>Training project.</p>
              <a href="https://room-web.vercel.app/" target="_blank">
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>

          {/* second card */}

          <div className="card">
            <img src={timer} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-text">Countdown Timer</h5>
              <p>Freelance project</p>
              <a
                href="https://countdown-timer-ebon.vercel.app/"
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
              <h5 className="card-text">NASIMS</h5>
              <p>Training project.</p>
              <a href="https://nasims-project.vercel.app/">
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>

          {/* fourt card */}

          <div className="card">
            <img src={meet} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-text">MEET</h5>
              <p>Training project</p>
              <a href="https://meet-web-three.vercel.app/" target="_blank">
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>

          {/* first card */}

          <div className="card">
            <img src={portfolio} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-text">PORTFOLIO</h5>
              <p>Freelance project</p>
              <a href="#">
                View Website <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>

          {/* sixth card */}

          <div className="card">
            <img src={portfolio2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-text">PORTFOLIO</h5>
              <p>Freelance project</p>
              <a href="#">
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
