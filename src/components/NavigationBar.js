import { Link } from "react-router-dom";
import LinkedinIcon from "../icons/linkedin.svg";
import GitHubIcon from "../icons/github.svg";
import SecrectIcon from "../icons/user-secret.svg";

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to={`/`}>
              <img
                className="filter-firebrick nav--icon-main"
                src={SecrectIcon}
                aria-hidden="true"
              />
              <span> Orel Ben Neriah</span>
            </Link>
          </h1>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "projects" }}>Projects</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "contact" }}>Contact</Link>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/orel-ben-neriah-401590216"
            target="_blank"
          >
            <img
              className="filter-firebrick nav--icons"
              src={LinkedinIcon}
              aria-hidden="true"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/orelbn" target="_blank">
            <img
              className="filter-firebrick nav--icons"
              src={GitHubIcon}
              aria-hidden="true"
            />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <Link to={`/resume`} className="button">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
