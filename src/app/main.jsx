import Hero from '../component/hero';
import Skills from '../component/skills';
import Projects from '../component/project';
import Contact from '../component/contact';
import Header from '../component/header';
import React from 'react';
import Footer from '../component/footer';
import Navbar from '../component/navbar'
import { Project_data } from '../context/Context'
import {projectDataDefault} from '../component/data.js'


import { useContext,useEffect } from "react";

const Main = () => {
  const {projectData, setProjectData} = useContext(Project_data);
  useEffect(() => {
    const fetchData = async () => {
      

      try {
        console.log(process.env.NEXT_PUBLIC_API_BASE_URL)

        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + '/api/projects/';

        const res = await fetch(apiUrl); // Replace with your API route
        const projectData = await res.json();
        if (Array.isArray(projectData) && projectData.length === 0) {
          console.log("The API returned an empty list. Setting default value");
          setProjectData(projectDataDefault)
      }
      } catch {
          setProjectData(projectDataDefault)
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
