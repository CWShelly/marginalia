import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import selectNotes from '../selectors/notes';
import bookNotes from '../selectors/bookNotes'
import { Link } from 'react-router-dom';

import filters from '../selectors/filter';

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
      <div  className="container">

       {this.props.notes.length === 0 && <div className="container">
         <p>You have not entered any notes for {this.state.title}, yet. </p>
         <p> <Link className="number-list-item"
         to={`/chapter/${this.state.title}/${localStorage.getItem('book_id')}`}>

         Get Started
         </Link>

       </p>
      </div>


 }
      {this.props.notes.length >0 &&
      <div >
            <h1> {this.props.history.location.pathname.slice(1,10) === 'viewNotes' ? 'This Book\'s' : 'All of Your'} Notes</h1>
         {this.props.notes.map((note, index)=>{
           return <NoteListItem key={note.id} { ...note} index={index}/>
         })}

      </div>
     }

       </div>

    )
  }
}

const mapStateToProps = (state, props)=>{

console.log(state);
console.log(props.history.location.pathname.slice(1,10));

if(props.history.location.pathname.slice(1,10) === "viewNotes"){
  return{
    notes: filters(selectNotes(state.paragraphs), state.filters)
  }
}
else{
  return{
    notes: filters(state.paragraphs, state.filters)
  }
}





}

export default connect(mapStateToProps)(NoteList);
