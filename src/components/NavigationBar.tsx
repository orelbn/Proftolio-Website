import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from "../icons/github.svg";
import LinkedinIcon from "../icons/linkedin.svg";
import SecrectIcon from "../icons/user-secret.svg";

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <NavLink to={`/`} className="nav-align-contents">
              <img
                className="filter-firebrick nav--icon-main"
                src={SecrectIcon}
                aria-hidden="true"
              />
              <span> Orel Ben Neriah</span>
            </NavLink>
          </h1>
        </li>
        <li>
          <NavLink to={{ pathname: "/", hash: "projects" }}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>About</NavLink>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/orel-ben-neriah-401590216"
            target="_blank"
            rel="noreferrer"
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
          <a href="https://github.com/orelbn" target="_blank" rel="noreferrer">
            <img
              className="filter-firebrick nav--icons"
              src={GitHubIcon}
              aria-hidden="true"
            />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <NavLink to={`/resume`} className="button">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
