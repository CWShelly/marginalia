import React from 'react';
import { connect } from 'react-redux';
import { startAddNote } from '../actions/notes';
import NoteForm from './NoteForm';



export class AddNote extends React.Component{

 onSubmit=(note)=>{
//    console.log(note);
// console.log(this.props);
     this.props.startAddNote(note);
          // this.props.history.push('/')
          this.props.history.push(`/viewNotes/${this.props.title}`)
     // this.props.history.push(`/viewNotes/${this.props.title}/${id}`)
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
     startAddNote: (note)=> dispatch(startAddNote(note))
})
export default connect(undefined, mapDispatchToProps)(AddNote)
