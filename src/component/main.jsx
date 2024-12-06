import Hero from './hero';
import Skills from './skills';
import Projects from './project';
import Contact from './contact';
import Header from './header';
import React from 'react';
import Footer from './footer';
const Main = () => {
  return (
    <div className='fullHeight'>

    
      <Header />
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
