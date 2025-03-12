import React from "react";
import { openSourceContributions } from "../../data/Resume/OpenSource";
import ResumeItemBody from "./ResumeItemBody";
import ResumeSubheader from "./ResumeSubHeader";

const OpenSourceContent: React.FC = () => {
  return (
    <div>
      {openSourceContributions.map((contribution) => (
        <React.Fragment key={contribution.title}>
          <ResumeSubheader
            title={contribution.title}
            date={contribution.date}
            info={contribution.info}
            link={contribution.link}
          />
          <ResumeItemBody
            bulletPoints={contribution.bulletPoints}
            technologies={contribution.technologies}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default OpenSourceContent;
