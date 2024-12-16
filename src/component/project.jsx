import { Project_data } from '../context/Context'

import { useContext,useEffect } from "react";

const Projects = () => {
  const {projectData, setProjectData} = useContext(Project_data);
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
                    <i className="fa-solid fa-circle-info fa-bounce fa-lg iconhover"></i>
                  </span>
                </a>
              </div>
            </div>
            <h3>{project.title || 'No Title'}</h3>
            <p>{project.description || 'No Description Available'}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects;