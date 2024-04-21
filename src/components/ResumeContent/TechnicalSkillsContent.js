import {
  Frameworks,
  Languages,
  Database,
  ToolsAndServices,
} from "../../data/Resume/TechincalSkills";
import ResumeSubheader from "./ResumeSubHeader";
const TechincalSkillsContent = () => {
  return (
    <div>
      <ResumeSubheader title="Languages: " info={Languages} date="" />
      <ResumeSubheader title="Frameworks: " info={Frameworks} date="" />
      <ResumeSubheader title="Database: " info={Database} date="" />
      <ResumeSubheader
        title="Tools and Services: "
        info={ToolsAndServices}
        date=""
      />
    </div>
  );
};

export default TechincalSkillsContent;
