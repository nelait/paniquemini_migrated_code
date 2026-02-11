// Navigation bar component
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation" aria-label="Main navigation">
    <NavLink to="/" end>home</NavLink>
    <NavLink to="/home/exampleone">subpage</NavLink>
    <NavLink to="/home/exampletwo">subpage 2</NavLink>
    <NavLink to="/songs">songs</NavLink>
  </nav>
);

export default Navigation;
