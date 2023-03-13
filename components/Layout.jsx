import React from 'react';
import Head from 'next/head';


const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>M&M Distribuidora</title>
      </Head>
      <header>

      </header>
      <main>
        {children}
      </main>

    </div>
  )
}

export default Layout