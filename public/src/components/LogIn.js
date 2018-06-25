import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Link } from 'react-router-dom';

 export const LogIn =({ startLogin })=>(


   <div  >

       <p> <Link
       to={`/about`}>Marginalia Geek</Link>
       </p>

      <button className="btn btn-primary btn-xl" onClick={startLogin}>Enter</button>


   </div>


 );

 const mapDispatchToProps = (dispatch) =>({
   startLogin: ()=>dispatch(startLogin())
 });

 export default connect(undefined, mapDispatchToProps)(LogIn);
