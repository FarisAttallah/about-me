import Hero from './hero';
import Skills from './skills';
import Projects from './project';
import Contact from './contact';
import Header from './header';
import React from 'react';
const Main = () => {
  return (
    <>

      <Header />
      <div className='container-3-columns'>
        
        
        <div className='container container2' >
        <Skills />
        <Contact/>
        </div>
        <div className='container container1'>
          <Hero />
        </div>
        <div className='container container2' >
        <Projects />

        </div>


      </div>
    </>
  )
}
export default Main;
