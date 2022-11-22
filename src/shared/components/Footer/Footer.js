import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <hr className="left-line" />
      <div>
        <a href="https://github.com/Yasmeen-Mostafa" title="Github">
          <FontAwesomeIcon icon={faGithub} className="icon" bounce />
        </a>
        <a
          href="https://www.linkedin.com/in/yasmeen-mustafa-a0b909205/"
          title="Linked-In"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" bounce />
        </a>
        <a
          href="https://www.hackerrank.com/yasmeen_mostafa2"
          title="HackerRank"
        >
          <FontAwesomeIcon icon={faHackerrank} className="icon" bounce />
        </a>
      </div>
      <hr className="right-line" />
    </footer>
  );
};
export default Footer;
