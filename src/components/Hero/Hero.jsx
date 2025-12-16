import React from "react";
import "./Hero.css";
import profile from "../../assets/photo_2025-11-06_22-31-38.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Betelhem.melesse-Resume1.pdf";
const Hero = () => {
  return (
    <div id="hom e" className="hero">
      <img src={profile} alt="" />
      <h1>
        {" "}
        <span>I'm Betelhem Melesse,</span> Fullstack Developer
      </h1>
      <p>
        I am fullstack Website and Mobile app developer, and a 4th year Software
        Engineering student at Addis Ababa University.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            Connect With Me
          </AnchorLink>{" "}
        </div>
        <div className="hero-resume">
          <a
            href={resume} // ⬅️ **IMPORTANT: Set the correct path to your PDF here**
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
