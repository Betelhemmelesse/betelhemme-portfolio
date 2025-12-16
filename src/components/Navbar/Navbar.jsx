import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import theam from "../../assets/theam.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.png";
import menu_close from "../../assets/menu_close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          <div
            className={`hover-line ${menu === "home" ? "active" : ""}`}
          ></div>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          <div
            className={`hover-line ${menu === "about" ? "active" : ""}`}
          ></div>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Service</p>
          </AnchorLink>
          <div
            className={`hover-line ${menu === "services" ? "active" : ""}`}
          ></div>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Project</p>
          </AnchorLink>
          <div
            className={`hover-line ${menu === "work" ? "active" : ""}`}
          ></div>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          <div
            className={`hover-line ${menu === "contact" ? "active" : ""}`}
          ></div>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Conntact With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
