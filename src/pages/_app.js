import '../styles/globals.css';
import Layout from '../component/layout';
import Loading from '../component/loading';
import React, { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
  
    </Layout>
  );
}