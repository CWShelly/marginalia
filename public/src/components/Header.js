import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Marginalia</h1>
    <p>for readers</p>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    &nbsp;


        <NavLink to="/quickNote" activeClassName="is-active" exact={true}>  <i className="fa fa-pencil header-icon"></i></NavLink>

  </header>
);

export default Header;
