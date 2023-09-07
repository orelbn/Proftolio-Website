import { ProfessionalExperience } from "../../data/Resume/WorkExperience";
import ResumeItemBody from "./ResumeItemBody";
import ResumeSubheader from "./ResumeSubHeader";

const ProfessionalExperienceContent = () => {
  return (
    <div>
      {ProfessionalExperience.map((experience) => {
        return (
          <>
            <ResumeSubheader
              title={experience.title}
              date={experience.date}
              info={experience.info}
              link={experience.link}
              key={experience.title}
            />
            <ResumeItemBody
              bulletPoints={experience.bulletPoints}
              technologies={experience.technologies}
            />
          </>
        );
      })}
    </div>
  );
};

export default ProfessionalExperienceContent;
