import Intro from "./Intro.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  let location = useLocation();

  useEffect(() => {
    let hash = location.hash;
    if (hash !== "") {
      const id = hash.replace("#", "");
      const elm = document.getElementById(id);
      if (elm) elm.scrollIntoView();
    }
  }, [location]);

  return (
    <div>
      <Intro />
      <div className="gradient"></div>
      <Projects />
      <div className="gradient"></div>
      <Contact />
      <div className="gradient"></div>
    </div>
  );
};

export default MainPage;
