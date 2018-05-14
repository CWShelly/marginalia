import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';



export const Header = ({ startLogout }) => (
  <header className="header">
    <h1>Marginalia Geek</h1>
    <p>for readers</p>
    <p><NavLink className="header-nav" to="/dashboard" activeClassName="is-active"  >Home</NavLink>   <button onClick={startLogout}>Logout</button></p>




  </header>
);

const mapDispatchToProps  = (dispatch)=>({
startLogout: ()=> dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);
