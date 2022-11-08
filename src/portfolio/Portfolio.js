import React from "react";
import "../portfolio/Portfolio.css";
import room from "../images/room.jpg";
import timer from "../images/timer.jpg";
import nasim from "../images/nasim.jpg";
import meet from "../images/meet.PNG";
import portfolio2 from "../images/portfolio2.PNG";
import portfolio1 from "../images/portfolio.PNG";
import audiophile from "../images/audiophile.png";

const portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <h1>PORTFOLIO</h1>

        <div className="cards">
          {/* new card */}
          <div className="card">
            <img src={audiophile} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">AUDIOPHILE</h4>
              <p>
                <i>E-commerce</i>
              </p>
              <p>React Js</p>
              <a href="https://audiophile-dun-beta.vercel.app/" target="_blank">
                <span>View Website</span>
              </a>
            </div>
          </div>

          {/* first card */}
          <div className="card">
            <img src={room} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">ROOM</h4>
              <p>
                <i>Furniture and life style</i>
              </p>
              <p>HTML, CSS, JavaScript</p>
              <a href="https://room-web.vercel.app/" target="_blank">
                <span>View Website</span>
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
              <p>HTML, CSS, JavaScript</p>
              <a
                href="https://countdown-timer-ebon.vercel.app/ "
                target="_blank"
              >
                <span>View Website</span>
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
              <p>HTML, CSS, Bootstrap </p>
              <a href="https://nasims-project.vercel.app/" target="_blank">
                <span>View Website</span>
              </a>
            </div>
          </div>

          {/* fourth card */}

          <div className="card">
            <img src={meet} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">MEET</h4>
              <p>
                <i>Social App</i>
              </p>
              <p>React JS </p>
              <a href="https://meet-react-eta.vercel.app/" target="_blank">
                <span>View Website</span>
              </a>
            </div>
          </div>

          {/* fifth card */}

          <div className="card">
            <img src={portfolio2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">GUESS MY NUMBER</h4>
              <p>
                <i>Game</i>
              </p>
              <p>HTML, CSS, JavaScript </p>
              <a
                href="https://guess-my-number-game-eight.vercel.app/"
                target="_blank"
              >
                <span>View Website</span>
              </a>
            </div>
          </div>
          {/* sixth card */}
          <div className="card">
            <img src={portfolio1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">PORTFOLIO</h4>
              <p>
                <i>Personal</i>
              </p>
              <p>React Js, Bootstrap </p>
              <a
                href="https://new-portfolio-teal-kappa.vercel.app/"
                target="_blank"
              >
                <span>View Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default portfolio;
