import Project from "./Project.js";
import YogaVisionImg from "../img/yogaVision.svg";
import SpeechScriptImg from "../img/speechScript.svg";
import NavigtarImg from "../img/navigatr.svg";
import CodeBankImg from "../img/CodeBank.svg";
import EasyWritingImg from "../img/easyWriting.svg";
import {
  EasyWritingProject,
  YogaVisionProject,
  SpeechScriptProject,
  NavigtarProject,
  CodeBankProject,
} from "../data/ProjectsInfo";

const Projects = () => {
  return (
    <div className="section-dkcyan">
      <section id={"projects"}>
        <h2> Projects I'm proud of </h2>
        <Project project={EasyWritingProject} image={EasyWritingImg} />
        <Project project={YogaVisionProject} image={YogaVisionImg} />
        <Project project={SpeechScriptProject} image={SpeechScriptImg} />
        <Project project={NavigtarProject} image={NavigtarImg} />
        <Project project={CodeBankProject} image={CodeBankImg} />
      </section>
    </div>
  );
};

export default Projects;
