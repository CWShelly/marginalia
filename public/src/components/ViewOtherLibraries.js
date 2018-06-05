import React from 'react';
import BookList from './BookList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class ViewOtherLibraries extends React.Component{

  state = {

  }
 


render(){
console.log(this.props);
  return(
    <div className="container">
 <BookList />

     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     // startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewOtherLibraries)
