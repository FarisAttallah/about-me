import '../styles/globals.css';
import Layout from '../app/layout.tsx';
import { useState, useEffect } from 'react';
import Context from '../context/Context.js'
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (



      <Context>

        <Component {...pageProps} />
      </Context>


  );
}