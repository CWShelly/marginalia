import React from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class ViewUsers extends React.Component{

  state = {

  }
  // <UserList history={this.props.history} />


render(){
 
  return(
    <div className="container">

  <UserList history={this.props.history} />
     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     // startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewUsers)
