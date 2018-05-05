import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import selectNotes from '../selectors/notes';
import pickUpFromLastNote from '../selectors/from_last_note'


export class NoteList extends React.Component{
  render(){
    return(
      <div>
       <h1>Note List</h1>

       {this.props.notes.map((note, index)=>{
         return <NoteListItem key={note.id} { ...note} index={index}/>
       })}
       </div>

    )
  }
}

const mapStateToProps = (state)=>{
  // if(state.notes.length > 0){
    return {
      notes: selectNotes(state.notes)
      // last_note:pickUpFromLastNote(state.notes)
    }
    // else{
    //   notes: selectNotes(state.notes),
    //   last_note:pickUpFromLastNote(state.notes)
    // }
  // }



}

export default connect(mapStateToProps)(NoteList);
