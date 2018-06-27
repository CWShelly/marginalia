import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import  { Profile }  from '../components/Profile';
import { Jumbotron, Container } from 'reactstrap'



export class Header extends React.Component{

  state={
    user_info:JSON.parse(localStorage.getItem(`firebase:authUser:${process.env.FIREBASE_API_KEY}:[DEFAULT]`)),
    user_name:localStorage.getItem('user_name')

  }

  // <p>{this.state.user_info.displayName ? this.state.user_info.displayName : 'for readers'}</p>
  render(){
console.log(this.state.user_name);
    return(
      <Fragment>
      <Container fluid>
            <div className="row">
                  <div className="col ml-2">
                    <h1  >Marginalia Geek</h1>
                    <p>{this.state.user_name}</p>
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
                           <a onClick={this.props.startLogout} className="nav-link">Logout</a>
                         </li>
                       </ul>
                     </div>

                     </nav>
</div>


  <Jumbotron className="JumboHeaderImg fluid">

       <div className="jumbo-inner-div ">

          <h1 className="display-4 mt-4">For Critical Readers.</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aperiam repellat ad doloribus aspernatur
           ex nobis nam porro magni qui provident sit nisi, ut dolore sapiente alias dignissimos assumenda cum.</p>
         <p className="lead">
          <a className="btn btn-primary btn-lg mb-2" href="#" role="button"> Learn More</a>
        </p>

      </div>

 </Jumbotron>

</Container>
 </Fragment>


    )
  }
}

const mapDispatchToProps  = (dispatch)=>({
startLogout: ()=> dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);
