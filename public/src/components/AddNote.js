import React from 'react';
import { connect } from 'react-redux';
import { startAddNote } from '../actions/notes';
import NoteForm from './NoteForm';
import pickUpFromLastNote from '../selectors/from_last_note'


export class AddNote extends React.Component{

 onSubmit=(note)=>{
   console.log(this.props);
     this.props.startAddNote(note);

     this.props.history.push(`/viewNotes/${this.props.title}`)

  }
  render(){

    return (
      <div>
 
       <NoteForm
         onSubmit={this.onSubmit}
       />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log(state);

}


const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(AddNote)
