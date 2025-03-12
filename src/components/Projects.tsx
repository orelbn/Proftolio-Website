import React from "react";
import {
  AWSBookingProject,
  CodeBankProject,
  EasyWritingProject,
  NavigtarProject,
  SpeechScriptProject,
  YogaVisionProject,
} from "../data/ProjectsInfo";
import AWSMeetingBookingImg from "../img/AWSBookingSystem.svg";
import CodeBankImg from "../img/CodeBank.svg";
import EasyWritingImg from "../img/easyWriting.svg";
import NavigtarImg from "../img/navigatr.svg";
import SpeechScriptImg from "../img/speechScript.svg";
import YogaVisionImg from "../img/yogaVision.svg";
import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <div className="section-dkcyan">
      <section id={"projects"}>
        <h2> Projects I'm proud of </h2>
        <Project project={AWSBookingProject} image={AWSMeetingBookingImg} />
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
