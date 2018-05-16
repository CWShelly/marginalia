import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export class Header extends React.Component{

  state={
    user_info:JSON.parse(localStorage.getItem(`firebase:authUser:${process.env.FIREBASE_API_KEY}:[DEFAULT]`))

  }


  render(){
// console.log(this.state.user_info);
// console.log(this.state.user_info.displayName);
    return(
      <header className="header">
        <h1>Marginalia Geek</h1>

        <p>{this.state.user_info.displayName ? this.state.user_info.displayName : 'for readers'}</p>

        <p><NavLink className="header-nav" to="/dashboard" activeClassName="is-active"  >Home</NavLink>
         <button onClick={this.props.startLogout}>Logout</button></p>

      </header>
    )
  }
}

// export const Header = ({ startLogout }) => (
//   <header className="header">
//     <h1>Marginalia Geek</h1>
//     <p>for readers</p>
//     <p><NavLink className="header-nav" to="/dashboard" activeClassName="is-active"  >Home</NavLink>
//      <button onClick={startLogout}>Logout</button></p>
//
//   </header>
// );

const mapDispatchToProps  = (dispatch)=>({
startLogout: ()=> dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);
