import React from "react";
import "./About.css";
import theam_pattern from "../../assets/theam.png";
import profile from "../../assets/photo_2025-11-06_22-31-38.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theam_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Full-Stack Developer Technical Skills in MERN, MySQL, and React
              Native for web and mobile apps.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML and Css</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Flutter</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Restful api</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
