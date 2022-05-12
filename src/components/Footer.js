const Footer = () => {
  return (
    <footer>
      <h2> Orel Ben Neriah &middot; Student </h2>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/orel-ben-neriah-401590216"
            target="_blank"
          >
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/orelbn" target="_blank">
            <span className="fab fa-github-square" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:ContactOrelbn@gmail.com" target="_blank">
            <span className="fas fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2022 Orel Ben Neriah. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
