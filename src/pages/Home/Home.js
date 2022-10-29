import "./Home.scss";
import profile from "../../assets/Images/Yasmeen.jpg";
import resume from "../../assets/Documents/Yasmeen Mostafa Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBraille } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <figure className="animate__animated animate__fadeIn">
          <img src={profile} />
        </figure>
        <div className="home__details">
          <div className="home__position">
            <h1 className="animate__animated animate__fadeInLeft">
              <span>Hello</span>
              <br />
              World!
            </h1>
            <div className="home__text animate__animated animate__fadeInDown">
              <p>
                I'm <span>Yasmeen Mostafa</span>, frontend web developer
              </p>
              <a href={resume} download="Yasmeen Mostafa Resume.pdf">
                <button>
                  <strong>
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="lightColor"
                    />
                    &nbsp; Download CV
                  </strong>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
