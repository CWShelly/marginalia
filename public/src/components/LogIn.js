import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

 export const LogIn =({ startLogin })=>(


   <div className="login-image">
      <button onClick={startLogin}>Sign in.</button>
      <h1>Marginalia Geek</h1>
   </div>


 );

 const mapDispatchToProps = (dispatch) =>({
   startLogin: ()=>dispatch(startLogin())
 });

 export default connect(undefined, mapDispatchToProps)(LogIn);
