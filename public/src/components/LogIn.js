import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Link } from 'react-router-dom';

 export const LogIn =({ startLogin })=>(


   <div className="JumboHeaderImg">

       <p className="lead"> <Link style={{color:"white"}}
       to={`/about`}>Marginalia Geek</Link>
       </p>

      <button className="btn btn-block login-button" onClick={startLogin}>Enter</button>


   </div>


 );

 const mapDispatchToProps = (dispatch) =>({
   startLogin: ()=>dispatch(startLogin())
 });

 export default connect(undefined, mapDispatchToProps)(LogIn);
