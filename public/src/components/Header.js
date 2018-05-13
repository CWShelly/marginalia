import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';



export const Header = ({ startLogout }) => (
  <header className="header">
    <h1>Marginalia</h1>
    <p>for readers</p>
    <NavLink to="/dashboard" activeClassName="is-active"  >Home</NavLink>

    <button onClick={startLogout}>Logout</button>


  </header>
);

const mapDispatchToProps  = (dispatch)=>({
startLogout: ()=> dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);
