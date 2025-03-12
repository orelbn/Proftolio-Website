import Accordion from "../components/Accordion";
import EducationContent from "../components/ResumeContent/EducationContent";
import OpenSourceContent from "../components/ResumeContent/OpenSourceContent";
import ProfessionalExperienceContent from "../components/ResumeContent/ProfessionalExperienceContent";
import ProjectsContent from "../components/ResumeContent/ProjectsContent";
import TechnicalSkillsContent from "../components/ResumeContent/TechnicalSkillsContent";

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
            <Accordion
              header="Professional Experience"
              content={<ProfessionalExperienceContent />}
            />
            <Accordion header="Open Source" content={<OpenSourceContent />} />
            <Accordion header="Projects" content={<ProjectsContent />} />
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
