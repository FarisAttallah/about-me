import Hero from '../component/hero';
import Skills from '../component/skills';
import Projects from '../component/project';
import Contact from '../component/contact';
import Header from '../component/header';
import React from 'react';
import Footer from '../component/footer';
import Navbar from '../component/navbar'
import { Project_data } from '../context/Context'

import { useContext,useEffect } from "react";

const Main = () => {
  const {projectData, setProjectData} = useContext(Project_data);
  useEffect(() => {
    const fetchData = async () => {
      

      try {
        const res = await fetch('http://127.0.0.1:8000/api/projects/'); // Replace with your API route
        const projectData = await res.json();
        setProjectData(projectData);
      } catch {
          console.log('error while fetching projects')
      }
    };

    fetchData();
  }, []);
  return (
    <div className='fullHeight'>
<Header />
    <Navbar/>
      
      
      <div className='container-3-columns'>
        
        
        <div className='container left' >
        <Skills />
        <Contact/>
        </div>
        <div className='container center '>
          <Hero />
        </div>
        <div className='container right' >
        <Projects />

        </div>


      </div>
      <Footer />
      </div>
  )
}
export default Main;
