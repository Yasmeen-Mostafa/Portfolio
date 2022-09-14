import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarIcons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faCircleInfo,
  faFile,
  faDiagramProject,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const NavbarIcons = (props) => {
  return (
    <ul className={"navbar" + (props.addAnimation ? " animate-small" : "")}>
      <li className="navbar__link icon">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} className="navbar__icon" />
        </NavLink>
      </li>
      <li className="navbar__link icon">
        <NavLink to="/about">
          <FontAwesomeIcon icon={faCircleInfo} className="navbar__icon " />
        </NavLink>
      </li>
      <li className="navbar__link icon">
        <NavLink to="/resume">
          <FontAwesomeIcon icon={faFile} className="navbar__icon " />
        </NavLink>
      </li>
      <li className="navbar__link icon">
        <NavLink to="/projects">
          <FontAwesomeIcon icon={faDiagramProject} className="navbar__icon" />
        </NavLink>
      </li>
      <li className="navbar__link icon">
        <NavLink to="/contactme">
          <FontAwesomeIcon icon={faComments} className="navbar__icon" />
        </NavLink>
      </li>
    </ul>
  );
};
export default NavbarIcons;
