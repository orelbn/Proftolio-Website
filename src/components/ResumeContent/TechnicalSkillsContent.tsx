import React from "react";
import {
  Database,
  Frameworks,
  Languages,
  ToolsAndServices,
} from "../../data/Resume/TechincalSkills";
import ResumeSubheader from "./ResumeSubHeader";

const TechnicalSkillsContent: React.FC = () => {
  return (
    <div>
      <ResumeSubheader title="Languages: " info={Languages[0]} date="" />
      <ResumeSubheader title="Frameworks: " info={Frameworks[0]} date="" />
      <ResumeSubheader title="Database: " info={Database[0]} date="" />
      <ResumeSubheader
        title="Tools and Services: "
        info={ToolsAndServices[0]}
        date=""
      />
    </div>
  );
};

export default TechnicalSkillsContent;
