import React from "react";
import tewoPhoto from "../../images/tnew.png";
import "../content/Content.css";
const Content = () => {
  return (
    <div id="allcontent">
      <div id="imagetext">
        <div className="image">
          <img src={tewoPhoto} alt="" />
        </div>
        <div className="text">
          <p id="hello">Hello World, I am</p>
          <h1>Tewogbade</h1>
          <p>
            A Web Developer and an Architect with strong analytical, management
            and communication skills, who continuously seeks opportunities to
            expand his knowledge and develop hard skills in a dynamic and
            professional environment. I have 1 years of progressive internship
            experience in both front and and developmet coupled with 5 years
            experience in architecture and construction.
          </p>
          <button type="button" class="btn btn-outline-dark">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
