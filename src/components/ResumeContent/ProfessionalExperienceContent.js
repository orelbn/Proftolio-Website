import ResumeSubheader from "./ResumeSubHeader";

const ProfessionalExperienceContent = () => {
  return (
    <div>
      <div>
        <ResumeSubheader
          title="Security Officer, "
          info="Paladin Security, UBC Hospital, Vancouver"
          date="Aug 2018 – Aug 2020"
        />
        <ul>
          <li>
            Conducted patrols to ensure safety by examining areas for any safety
            hazards; attended calls to assist with safety concerns in a wide
            range of situations; wrote detailed reports to provide an accurate
            record of events
          </li>
        </ul>
      </div>

      <div>
        <ResumeSubheader
          title="Assistant Instructor, "
          info="FKPMMA, Vancouver"
          date="Jul 2012 – Apr 2018"
        />
        <ul>
          <li>
            Taught martial arts to adults and kids of all ages and skill levels
            in groups of up to 40 individuals.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalExperienceContent;
