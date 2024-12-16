
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../app/main';

import Loading from '../component/loading';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);
  return (

    isLoading ? (
      <Loading />
    ) :(
    <Main/>)
  );
};

export default Home;