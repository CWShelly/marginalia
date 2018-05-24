import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
// import selectNotes from '../selectors/notes';
// import bookNotes from '../selectors/bookNotes'
import { Link } from 'react-router-dom';
import filterThis from '../selectors/genericSelector';

// import filters from '../selectors/filter';

export class NoteList extends React.Component{
  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title')
  }

  render(){

console.log(this.props.history.location.pathname);
      return(
        <div className="container">
        <ul className="reverse-list">
        {this.props.notes.map((note)=>{
          return <NoteListItem key={note.id} {...note} />
        })}

        </ul>

        </div>
      )
  }
}

const mapStateToProps = (state, props)=>{
if(props.history.location.pathname.slice(1,10) === "viewNotes"){
  return{
   notes: filterThis(state.notes, 'book_id'),
  }

}

else {
  return{
   notes: state.notes
  }

}

}

export default connect(mapStateToProps)(NoteList);
