import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import  { Profile }  from '../components/Profile';
import { Jumbotron, Container } from 'reactstrap'



export class Header extends React.Component{

  state={
    user_info:JSON.parse(localStorage.getItem(`firebase:authUser:${process.env.FIREBASE_API_KEY}:[DEFAULT]`)),
    user_name:localStorage.getItem('user_name') || ''

  }

  // <p>{this.state.user_info.displayName ? this.state.user_info.displayName : 'for readers'}</p>
     // <Link  className="btn btn-primary dash-btn" to="/viewAllNotes" role="button" >View Your Notes</Link>
  render(){
this.state.user_name && console.log(this.state.user_name);
    return(
      <Fragment>

            <div className="row">
                  <div className="col ml-2">
                    <h1  >Marginalia Geek</h1>
                    <p>{this.state.user_name && this.state.user_name}</p>
                  </div>

                     <nav className="navbar navbar-expand navbar nav-bg">
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">

                       <ul className="navbar-nav ml-auto mr-4">
                         <li className="nav-item">
                           <NavLink  to="/dashboard" activeClassName="is-active"  className="nav-link">Home</NavLink>
                         </li>
                         <li className="nav-item">
                           <NavLink to="/browse" className="nav-link">Peruse</NavLink>
                         </li>
                         <li className="nav-item">
                           <NavLink to="/viewAllNotes" className="nav-link">Collection</NavLink>
                         </li>
                         <li className="nav-item">
                           <a onClick={this.props.startLogout} className="nav-link">Logout</a>
                         </li>
                       </ul>
                     </div>

                     </nav>
</div>


  <div className="JumboHeaderImg fluid no-gutters">

       <div className="jumbo-inner-div ">

          <h1 className="display-4 ml-4 mt-4">For Critical Readers.</h1>
          <p className="lead ml-5">Research is formalized curiosity. It is poking and prying with a purpose.</p>
         <p className="lead text-right mr-4">
          Zora Neale Hurston
        </p>

      </div>

 </div>


 </Fragment>


    )
  }
}

const mapDispatchToProps  = (dispatch)=>({
startLogout: ()=> dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);
