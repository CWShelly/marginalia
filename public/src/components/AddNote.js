import React from 'react';
import { connect } from 'react-redux';
import { startAddNote, findTag } from '../actions/notes';
import NoteForm from './NoteForm';
// import pickUpFromLastNote from '../selectors/from_last_note'


export class AddNote extends React.Component{

 onSubmit=(note)=>{
   console.log(note);

     this.props.startAddNote(note);

     // this.props.history.push(`/viewNotes/${this.props.title}`)

  }

  findTag=()=>{
    console.log('finding tag');
    this.props.findTag()
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

const mapStateToProps =(state, props)=>{

  return{
    note: 'x'
  }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note)),
     findTag: (note)=>dispatch(findTag(note))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddNote)
