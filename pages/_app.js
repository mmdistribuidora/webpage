import React from 'react';
import useScript from '../hooks/useScript';
import { Layout } from '../components';
import '../styles/globals.css';
import '../components/scss/custom_scss.css';

function MyApp({ Component, pageProps }) {

  useScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
  
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
    

    )
}

export default MyApp
