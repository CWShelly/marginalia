import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Marginalia</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/addbook" activeClassName="is-active">Add a Book</NavLink>

  </header>
);

export default Header;
