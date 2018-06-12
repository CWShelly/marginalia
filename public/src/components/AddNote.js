import React from 'react';
import { connect } from 'react-redux';
import { startAddNote, findTag } from '../actions/notes';
import NoteForm from './NoteForm';




export class AddNote extends React.Component{

 onSubmit=(note)=>{

          this.props.startAddNote(note);

//necessary?
     // this.props.history.push(`/viewNotes/${this.props.title}`)
  }


  render(){

    return (
 
       <NoteForm
         onSubmit={this.onSubmit}
       />


    )
  }
}

const mapStateToProps =(state, props)=>{
// fix
  return{
    note: 'x'
  }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note)),

})


export default connect(mapStateToProps, mapDispatchToProps)(AddNote)
