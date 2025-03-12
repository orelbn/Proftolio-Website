import React from "react";

interface ResumeSubheaderProps {
  title: string;
  info: string;
  date: string;
  link?: string;
}

const ResumeSubheader: React.FC<ResumeSubheaderProps> = ({
  title,
  info,
  date,
  link,
}) => {
  return (
    <div className="resume--subheader">
      <p>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <strong>{title}</strong> {info}
          </a>
        ) : (
          <>
            <strong>{title}</strong> {info}
          </>
        )}
      </p>
      <p>{date}</p>
    </div>
  );
};

export default ResumeSubheader;
