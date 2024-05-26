import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
            <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
