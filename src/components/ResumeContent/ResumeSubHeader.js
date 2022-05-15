const ResumeSubheader = ({ title, info, date }) => {
  return (
    <div className="resume--subheader">
      <p>
        <strong>{title}</strong>
        {info}
      </p>
      <p>{date}</p>
    </div>
  );
};

export default ResumeSubheader;
