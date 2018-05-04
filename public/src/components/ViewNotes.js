import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';
import MostRecentNote from './MostRecentNote';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';


export class ViewNotes extends React.Component{

  state = {
    display: false,
   
  }



  onSubmit=(note)=>{

     this.props.startAddNote(note);

     this.props.history.push(`/viewNotes/${this.props.match.params.title}`)


  }



  displayAddNote =()=>{
    console.log(this);
    this.setState((prevState)=>({
      display: !prevState.display
    }))




    console.log(this.state.display);
  }

render(){

  return(
    <div>
    Viewing notes for {this.props.match.params.title}.
    <MostRecentNote history={this.props.history}  onSubmit={this.onSubmit} />
    <NoteList history={this.props.history}  />

    <button onClick={this.displayAddNote}>{!this.state.display ? 'Add a Note' : 'Cancel'}</button>

    {this.state.display &&   <AddNote history={this.props.history} title={this.props.match.params.title}/>}

    </div>
  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewNotes)
