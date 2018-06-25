import React from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BookList from './BookList'

import ListFilters from './ListFilters'
import filters from '../selectors/filter';
export class ViewUsers extends React.Component{

  state = {

  }
  // <UserList history={this.props.history} />
  // <BookList history={this.props.history} />

render(){

  return(
    <div >
    <ListFilters history={this.props.history}/>
  <UserList history={this.props.history} />

     </div>

  )
}
}


const mapDispatchToProps = (dispatch)=> ({
     // startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewUsers)
