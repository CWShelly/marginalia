import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
// import selectNotes from '../selectors/notes';
// import bookNotes from '../selectors/bookNotes'
import { Link } from 'react-router-dom';

// import filters from '../selectors/filter';

export class NoteList extends React.Component{
  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title')
  }

  render(){

    console.log(this.props);

      return(
        <div className="container">

        </div>
      )
  }
}

const mapStateToProps = (state, props)=>{

console.log(state);
  return{
   x: state.notes
  }

}

export default connect(mapStateToProps)(NoteList);
