import React from 'react';
import BookList from './BookList';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


export class ViewOtherLibraries extends React.Component{

  state = {

  }

  componentDidMount(){

    if(this.props.location.pathname === "/browseOtherLibraries" && localStorage.getItem('auth_id') === localStorage.getItem('browse_id') ){
      console.log('going to dashboard');
           this.props.history.push('/')

    }
    console.log('auth id', localStorage.getItem('auth_id'));
    console.log('browse_id', localStorage.getItem('browse_id'));
  console.log(localStorage.getItem('auth_id') === localStorage.getItem('browse_id'));
  }



render(){

  return(
    <div >
    <BookList />

     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     // startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewOtherLibraries)
