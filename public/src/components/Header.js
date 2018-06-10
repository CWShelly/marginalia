import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import  { Profile }  from '../components/Profile'



export class Header extends React.Component{

  state={
    user_info:JSON.parse(localStorage.getItem(`firebase:authUser:${process.env.FIREBASE_API_KEY}:[DEFAULT]`))

  }


  render(){
console.log(this.props);
    return(
      <div>
      <header className="header">
        <h1>Marginalia Geek</h1>

        <p>{this.state.user_info.displayName ? this.state.user_info.displayName : 'for readers'}</p>

        <p><NavLink className="header-nav" to="/dashboard" activeClassName="is-active"  >Home |</NavLink>
        &nbsp;


    <NavLink className="header-nav" to="/browse" activeClassName="is-active">Peruse |</NavLink>
         <button onClick={this.props.startLogout}>Logout</button></p>

      </header>

      </div>
    )
  }
}

const mapDispatchToProps  = (dispatch)=>({
startLogout: ()=> dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);
