import React from "react";
import { projects } from "../../data/Resume/Projects";
import ResumeItemBody from "./ResumeItemBody";
import ResumeSubheader from "./ResumeSubHeader";

const ProjectsContent: React.FC = () => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <React.Fragment key={project.title}>
            <ResumeSubheader
              title={project.title}
              date={project.date}
              info={project.info}
              link={project.link}
            />
            <ResumeItemBody
              bulletPoints={project.bulletPoints}
              technologies={project.technologies}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProjectsContent;
