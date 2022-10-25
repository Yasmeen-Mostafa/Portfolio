import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <hr className="left-line" />
      <div>
        <a href="https://github.com/Yasmeen-Mostafa">
          <FontAwesomeIcon icon={faGithub} className="icon" bounce />
        </a>
        <a href="https://www.linkedin.com/in/yasmeen-mustafa-a0b909205/">
          <FontAwesomeIcon icon={faLinkedin} className="icon" bounce />
        </a>
      </div>
      <hr className="right-line" />
    </footer>
  );
};
export default Footer;
