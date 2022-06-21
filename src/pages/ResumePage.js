import Accordion from "../components/Accordion";
import TechnicalSkillsContent from "../components/ResumeContent/TechnicalSkillsContent";
import ProjectsContent from "../components/ResumeContent/ProjectsContent";
import ProfessionalExperienceContent from "../components/ResumeContent/ProfessionalExperienceContent";
import EducationContent from "../components/ResumeContent/EducationContent";

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
