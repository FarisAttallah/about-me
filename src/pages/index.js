import Hero from '@/component/Hero';
import About from '@/component/About';
import Skills from '@/component/Skills';
import Projects from '@/component/Project';
import Contact from '@/component/Contact';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Joel's Portfolio</title>
        <meta name="description" content="Joel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;