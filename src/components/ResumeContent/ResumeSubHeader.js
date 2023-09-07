const ResumeSubheader = ({ title, info, date, link }) => {
  return (
    <div className="resume--subheader">
      <p>
        {link ? (
          <a href={link} target="_blank">
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
