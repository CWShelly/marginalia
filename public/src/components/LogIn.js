import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

 export const LogIn =({ startLogin })=>(


   <div className="login-image">


      <p>Marginalia Geek</p>
      <button onClick={startLogin}>Sign in.</button>

   </div>


 );

 const mapDispatchToProps = (dispatch) =>({
   startLogin: ()=>dispatch(startLogin())
 });

 export default connect(undefined, mapDispatchToProps)(LogIn);
