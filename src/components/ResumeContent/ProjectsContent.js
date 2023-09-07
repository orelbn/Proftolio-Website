import { projects } from "../../data/Resume/Projects";
import ResumeItemBody from "./ResumeItemBody";
import ResumeSubheader from "./ResumeSubHeader";
const ProjectsContent = () => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <>
            <ResumeSubheader
              title={project.title}
              date={project.date}
              info={project.info}
              link={project.link}
              key={project.title}
            />
            <ResumeItemBody
              bulletPoints={project.bulletPoints}
              technologies={project.technologies}
            />
          </>
        );
      })}
    </div>
  );
};

export default ProjectsContent;
