const Project = ({ project, image }) => {
  const { layout, identifier, title, description, link, technologies, imgAlt } =
    project;
  return (
    <article className={layout}>
      <div className="text">
        <h4> {identifier} </h4>
        <h3> {title} </h3>
        <p className="blackbox">
          {description}
          <br />
          {link && (
            <a href={link} target="_blank">
              {title}
            </a>
          )}
        </p>
        <h4> Technologies used include: </h4>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}> {tech} </li>
          ))}
        </ul>
      </div>
      <img src={image} alt={imgAlt} />
    </article>
  );
};

export default Project;
