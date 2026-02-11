// Layout component with header, navigation, and footer
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <header>
      <div className="logo">MINI</div>
      <Navigation />
    </header>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
