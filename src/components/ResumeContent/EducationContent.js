import ResumeSubheader from "./ResumeSubHeader";
const EducationContent = () => {
  return (
    <div>
      <ResumeSubheader
        title="Bachelor of Computer Science, "
        info="University of British Columbia"
        date="Sep 2021 - Present"
      />
      <ResumeSubheader
        title="Bachelor of Arts "
        info="(Criminology), Simon Fraser University"
        date="2020"
      />
      <ResumeSubheader
        title="Certificate in Police Studies, "
        info="Simon Fraser University"
        date="2020"
      />
    </div>
  );
};

export default EducationContent;
