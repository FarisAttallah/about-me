import React from 'react';
import { projectData } from '../../../component/data';


const Project = ({ projectId }) => {
  const project = projectData.find((project) => project.id == projectId);
  const { title, details, languages, technologies } = project || {};  // Default to an empty object if no project is found
  
  return (
    <>
    <div className='container-3-columns' >
    <div className="skills-container container container2">
        <h2>Languages used</h2>
        <div className="grid-skills">
          {languages &&
            languages.map((language) => (
              <div className="skill-card html" key={language.id}>
                <i className={language.icon}></i>
                <p>{language.name}</p>
              </div>
            ))}
        </div>
      </div>

    <div className="about-container container container1">
        <h2 className='about-bullet-header'>More about {title}</h2>
        <div>
          <div className="about-text">
            <ol>
              {details &&
                details.map((detail) => (
                  
                  <li key={detail} className='about-list'>
                    <p className='about-bullet' >{detail}</p>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
      

      <div className="projects-container container container2">
        <h2>Technologies used</h2>
        <div className="three">
          {technologies &&
            technologies.map((technology) => (
              <div className="project-card" key={technology.id}>
                <div className="project-header">
                  <span className='folder-icon'>
                  <i className={technology.icon}></i>
                  </span>
                </div>
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Project;
