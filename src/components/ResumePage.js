import Accordion from "./Accordion";
import TechnicalSkillsContent from "./ResumeContent/TechnicalSkillsContent";
import ProjectsContent from "./ResumeContent/ProjectsContent";
import ProfessionalExperienceContent from "./ResumeContent/ProfessionalExperienceContent";
import EducationContent from "./ResumeContent/EducationContent";

const ResumePage = () => {
  return (
    <div>
      <div className="gradient"></div>
      <div className="gradient"></div>

      <div className="section-dkcyan">
        <section id="resume">
          <h1> Resume </h1>
          <div className="AccordionContainer">
            <Accordion
              header="Technical Skills"
              content={<TechnicalSkillsContent />}
            />
            <Accordion header="Projects" content={<ProjectsContent />} />
            <Accordion
              header="Professional Experience"
              content={<ProfessionalExperienceContent />}
            />
            <Accordion header="Education" content={<EducationContent />} />
          </div>
        </section>
        <div className="gradient"></div>
        <div className="gradient"></div>
      </div>
    </div>
  );
};

export default ResumePage;
