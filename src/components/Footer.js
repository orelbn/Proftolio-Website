import LinkedinIcon from "../icons/linkedin.svg";
import GitHubIcon from "../icons/github.svg";
import EnvelopeIcon from "../icons/envelope.svg";

const Footer = () => {
  return (
    <footer>
      <h2> Orel Ben Neriah &middot; CTO </h2>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/orel-ben-neriah-401590216"
            target="_blank"
          >
            <img
              className="filter-firebrick footer--icons"
              src={LinkedinIcon}
              aria-hidden="true"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/orelbn" target="_blank">
            <img
              className="filter-firebrick footer--icons"
              src={GitHubIcon}
              aria-hidden="true"
            />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:ContactOrelbn@gmail.com" target="_blank">
            <img
              className="filter-firebrick footer--icons"
              src={EnvelopeIcon}
              aria-hidden="true"
            />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2024 Orel Ben Neriah. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
