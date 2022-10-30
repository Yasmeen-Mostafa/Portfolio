import { useEffect, useState } from "react";
import NavbarIcons from "../NavbarIcons/NavbarIcons";
import NavbarText from "../NavbarText/NavbarText";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);
  const [addAnimation, setAddAnimation] = useState(false);
  useEffect(() => {
    const handleWidthChange = (e) => {
      if (window.innerWidth > 768) setLargeScreen(true);
      else setLargeScreen(false);
    };
    window.addEventListener("resize", handleWidthChange);
  }, []);
  useEffect(() => {
    if (window.innerWidth >= 768) {
      console.log("p");
      setLargeScreen(true);
    }
  }, []);
  const animate = () => {
    console.log("clicked");
    setAddAnimation(true);

    setTimeout(() => {
      setExpandNav((state) => !state);
    }, 500);
  };
  return (
    <nav
      style={{
        backgroundColor: expandNav ? "#f6f4f2" : "transparent",
        opacity: expandNav ? "0.95" : "1",
      }}
    >
      <button onClick={animate}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {largeScreen && <NavbarIcons addAnimation={addAnimation}></NavbarIcons>}
      <div className="nav__container">
        {largeScreen ? (
          <></>
        ) : (
          expandNav && <NavbarText addAnimation={addAnimation}></NavbarText>
        )}

        {/* {expandNav && <NavbarIcons addAnimation={addAnimation}></NavbarIcons>} */}
      </div>
    </nav>
  );
};

export default Navbar;
