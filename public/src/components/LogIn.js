import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Link } from 'react-router-dom';

 export const LogIn =({ startLogin })=>(


   <div className="login-image">


   <p> <Link className="login-link"
   to={`/about`}>Marginalia Geek</Link></p>


      <button onClick={startLogin}>Sign in.</button>


   </div>


 );

 const mapDispatchToProps = (dispatch) =>({
   startLogin: ()=>dispatch(startLogin())
 });

 export default connect(undefined, mapDispatchToProps)(LogIn);
