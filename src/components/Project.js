const Project = ({
  type,
  identifier,
  title,
  description,
  link,
  technologies,
  img,
  imgAlt,
}) => {
  return (
    <article className={type}>
      <div className="text">
        <h4> {identifier} </h4>
        <h3> {title} </h3>
        <p className="blackbox">
          {description}
          <br />
          <a href={link} target="_blank">
            {title}
          </a>
        </p>
        <h4> Technologies used include: </h4>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}> {tech} </li>
          ))}
        </ul>
      </div>
      <img src={img} alt={imgAlt} />
    </article>
  );
};

export default Project;
