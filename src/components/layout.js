import PropTypes from 'prop-types';
import React from 'react';
import Footer from './footer';

import Header from './header';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen  text-gray-700'>
      <Header />

      <main className='flex-1 w-full max-w-7xl px-3 py-8 mx-auto md:px-11 md:py-5'>
        {children}
      </main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
