import React from "react";
import ResumeSubheader from "./ResumeSubHeader";

const EducationContent: React.FC = () => {
  return (
    <div>
      <ResumeSubheader
        title="Bachelor of Computer Science, "
        info="University of British Columbia"
        date="2024"
      />
      <ResumeSubheader
        title="Bachelor of Arts "
        info="(Criminology), Simon Fraser University"
        date="2020"
      />
    </div>
  );
};

export default EducationContent;
