import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from './AddNote';
import NoteList from './NoteList';
import MostRecentNote from './MostRecentNote';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';

export class ViewNotes extends React.Component{
  onSubmit=(note)=>{
   console.log(this.props);
     this.props.startAddNote(note);

     this.props.history.push(`/viewNotes/${this.props.title}`)

  }

render(){
  return(
    <div>
    Viewing notes for {this.props.match.params.title}.
    <MostRecentNote onSubmit={this.onSubmit} />
    <NoteList />
    <AddNote history={this.props.history} title={this.props.match.params.title}/>
    </div>
  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewNotes)



 // export default ViewNotes
