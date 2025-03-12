import React from "react";
import { ProfessionalExperience } from "../../data/Resume/WorkExperience";
import ResumeItemBody from "./ResumeItemBody";
import ResumeSubheader from "./ResumeSubHeader";

const ProfessionalExperienceContent: React.FC = () => {
  return (
    <div>
      {ProfessionalExperience.map((experience) => (
        <React.Fragment key={experience.title}>
          <ResumeSubheader
            title={experience.title}
            date={experience.date}
            info={experience.info}
            link={experience.link}
          />
          <ResumeItemBody
            bulletPoints={experience.bulletPoints}
            technologies={experience.technologies}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProfessionalExperienceContent;
