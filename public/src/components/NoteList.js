import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import selectNotes from '../selectors/notes';

const NoteList = (props)=>(
  <div>
   <h1>Note List</h1>
   {props.notes.map((note)=>{
     return <NoteListItem key={note.id} { ...note} />
   })}
   </div>
)

const mapStateToProps = (state)=>{
  return {
    notes: selectNotes(state.notes)
  }
}


export default connect(mapStateToProps)(NoteList);
