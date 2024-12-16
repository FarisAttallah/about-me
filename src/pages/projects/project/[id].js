import React from 'react';
import Project from '../components/project';
import Footer from '../../../component/footer';
import Header from '../../../component/header';
import { useRouter } from 'next/router'
import Navbar from '../../../component/navbar';

const Home = () => {
  const router = useRouter();

  return (
    <>
    <Navbar/>
      <Header />
      
      {router.query.id && <Project key={router.query.id} projectId={router.query.id} />}
      <Footer />
    </>
  );
};

export default Home;
