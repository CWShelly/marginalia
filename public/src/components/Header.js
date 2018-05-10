import React from 'react';
import { NavLink } from 'react-router-dom';

// <i className="fa fa-pencil header-icon"></i>

const Header = () => (
  <header className="header">
    <h1>Marginalia</h1>
    <p>for readers</p>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    &nbsp;

 
  </header>
);

export default Header;
