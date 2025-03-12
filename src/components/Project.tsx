// Define TypeScript interfaces for props
interface ProjectData {
  layout: string;
  identifier: string;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  imgAlt: string;
}

interface ProjectProps {
  project: ProjectData;
  image: string;
}

const Project = ({ project, image }: ProjectProps) => {
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
            <a href={link} target="_blank" rel="noreferrer">
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
