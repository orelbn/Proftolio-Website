import { Frameworks, Languages } from "../../data/Resume/TechincalSkills";
import ResumeSubheader from "./ResumeSubHeader";
const TechincalSkillsContent = () => {
  return (
    <div>
      <ResumeSubheader title="Languages: " info={Languages} date="" />
      <ResumeSubheader title="Tools/Frameworks: " info={Frameworks} date="" />
    </div>
  );
};

export default TechincalSkillsContent;
