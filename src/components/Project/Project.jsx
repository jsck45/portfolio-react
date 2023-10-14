import "./Project.css";

const Project = ({ title, description, image, link, technology }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <br />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={image} alt="Project Image" />{" "}
      </a>
      <p>{description}</p>
      <p>{technology}</p>
    </div>
  );
};

export default Project;
