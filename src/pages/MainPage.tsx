import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../components/Intro";
import Projects from "../components/Projects";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
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
    </div>
  );
};

export default MainPage;
