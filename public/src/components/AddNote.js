import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import NoteForm from './NoteForm';



export class AddNote extends React.Component{

 onSubmit=(note)=>{
  
     this.props.addNote(note);
     // this.props.history.push(`/viewNotes/${title}/${id}`)
  }
  render(){
    return (
      <div>
       <h1>Add a note</h1>
       <NoteForm
         onSubmit={this.onSubmit}
       />
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=> ({
     addNote: (note)=> dispatch(addNote(note))
})
export default connect(undefined, mapDispatchToProps)(AddNote)
