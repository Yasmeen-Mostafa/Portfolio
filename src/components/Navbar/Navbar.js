import React, { useState } from "react";
import NavbarIcons from "../NavbarIcons/NavbarIcons";
import NavbarText from "../NavbarText/NavbarText";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faCircleInfo,
  faFile,
  faDiagramProject,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState(false);
  const [addAnimation, setAddAnimation] = useState(false);
  const animate = () => {
    setAddAnimation(true);
    setTimeout(() => {
      setExpandNav((state) => !state);
    }, 500);
  };
  return (
    <nav>
      <button onClick={animate}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {expandNav && <NavbarText addAnimation={addAnimation}></NavbarText>}
      {expandNav === false && (
        <NavbarIcons addAnimation={addAnimation}></NavbarIcons>
      )}
    </nav>
  );
};

export default Navbar;
