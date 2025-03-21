import React from 'react';
import { Project_data } from '../../../context/Context';
import { useContext, useEffect } from "react";
import { projectDataDefault } from '../../../component/data.js'

const Project = ({ projectId }) => {
  const { projectData, setProjectData } = useContext(Project_data);
  useEffect(() => {
    const fetchData = async () => {
      console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + '/api/projects/';
      try {
        const res = await fetch(apiUrl); // Replace with your API route
        const projectData = await res.json();
        setProjectData(projectData);
        if (Array.isArray(projectData) && projectData.length === 0) {
          console.log("The API returned an empty list. Setting default value");
          setProjectData(projectDataDefault)
        }

      } catch {
        setProjectData(projectDataDefault)
      }

    };

    fetchData();
  }, []);
  let project = {};
  if (projectData) {
    project = projectData.find((project) => project.id == projectId);
  }
  const { title, details, languages, technologies } = project || {};  // Default to an empty object if no project is found

  return (
    <div className='fullHeight'>


      <div className='container-3-columns' >
        <div className="skills-container container left">
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

        <div className="about-container container center">
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


        <div className="projects-container container right">
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

    </div>
  );
};

export default Project;
