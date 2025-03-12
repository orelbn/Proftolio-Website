import React from "react";

interface ResumeItemBodyProps {
  bulletPoints: string[];
  technologies: string[];
}

const ResumeItemBody: React.FC<ResumeItemBodyProps> = ({
  bulletPoints,
  technologies,
}) => {
  return (
    <ul>
      {bulletPoints.map((bulletPoint, index) => (
        <li key={index}>{bulletPoint}</li>
      ))}
      <li>
        <em>{technologies.join(", ")}.</em>
      </li>
    </ul>
  );
};

export default ResumeItemBody;
