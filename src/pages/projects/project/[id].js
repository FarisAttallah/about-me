import React from 'react';
import Project from '../components/project';
import { projectData } from "../../../component/data";
import Header from '../../../component/header';
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div>
          {router.query.id && <Project key={router.query.id} projectId={router.query.id} />}
      </div>
    </>
  );
};

export default Home;
