import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import selectNotes from '../selectors/notes';
import pickUpFromLastNote from '../selectors/from_last_note'


export class NoteList extends React.Component{

  render(){
      console.log(this.props);
    return(
      <div>

      {this.props.notes.length >0 &&
      <div className="container note-list-container">

       {this.props.notes.map((note, index)=>{
         return <NoteListItem key={note.id} { ...note} index={index}/>
       })}
       </div>
     }
       </div>

    )
  }
}

const mapStateToProps = (state)=>{

    return {
      notes: selectNotes(state.notes)

    }




}

export default connect(mapStateToProps)(NoteList);
