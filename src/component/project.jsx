import { projectData } from './data.js';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open folder-icon"></i>
              <div className="small-icons">
                  <a href={`/projects/project/${project.id}`}>
                  <span className="blue">
                    <i className="fa-solid fa-circle-info"></i>
                  </span>
                  </a>
                </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects;