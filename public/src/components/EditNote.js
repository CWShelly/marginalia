
 import React from 'react';
 import { connect } from 'react-redux';
 import NoteForm from './NoteForm';
 import { editNote, startRemoveNote } from '../actions/notes';

 export class EditNote extends React.Component{
   onSubmit=(note)=>{
   this.props.editNote(this.props.note.id, note);
   this.props.history.push('/');
}
    onRemove = ()=>{

      this.props.startRemoveNote({ id: this.props.note.id })
      const notNotes = (note)=>{
        return note.id !== this.props.note.id
      }

      this.props.history.push('/');
    }


  render(){
    console.log(this.props);
    return (
      <div>
       <NoteForm
       note={this.props.note}
       notes={this.props.notes}
       
       onSubmit={
        this.onSubmit}
       />

       <button onClick={this.onRemove}>Delete Note</button>
      </div>
    )
  }
 }


 const mapStateToProps = (state, props)=>{

  return {
    note: state.notes.find((note)=>note.id === props.match.params.id),
    notes: state.notes.filter((note)=> note.id !== note)

  }
}


const mapDispatchToProps = (dispatch, props) => ({
  editNote:(id, note)=> dispatch(editNote(id, note)),
  startRemoveNote: (data)=> dispatch(startRemoveNote(data))

})


 export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
