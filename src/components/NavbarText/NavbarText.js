import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarText.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faCircleInfo,
  faFile,
  faDiagramProject,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
const NavbarText = (props) => {
  return (
    <ul className={"navbar" + (props.addAnimation ? " animate-large" : "")}>
      <li className="navbar__link">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} className="navbar__icon" />
          &nbsp;Home
        </NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/about">
          <FontAwesomeIcon icon={faCircleInfo} className="navbar__icon" />
          &nbsp;About Me
        </NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/resume">
          <FontAwesomeIcon icon={faFile} className="navbar__icon " />
          &nbsp;Resume
        </NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/projects">
          <FontAwesomeIcon icon={faDiagramProject} className="navbar__icon" />
          &nbsp;Projects
        </NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/contactme">
          <FontAwesomeIcon icon={faComments} className="navbar__icon" />
          &nbsp;Contact Me
        </NavLink>
      </li>
    </ul>
  );
};
export default NavbarText;
