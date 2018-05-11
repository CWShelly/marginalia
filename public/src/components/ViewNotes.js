import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';
import MostRecentNote from './MostRecentNote';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';


export class ViewNotes extends React.Component{

  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getITem('title')
  }


  onSubmit=(note)=>{
     this.props.startAddNote(note);
     this.props.history.push(`/viewNotes/${this.props.match.params.title}`)
  }



  displayAddNote =()=>{

    this.setState((prevState)=>({
      display: !prevState.display
    }))


  }

render(){

  return(
    <div className="view-notes-container-container">

    <div className="view-notes-container ">


      <p className="view-notes-title">Notes for      {this.props.state.title} by {this.state.author_first_name} {this.state.author_last_name} </p>


      <NoteList history={this.props.history}  />

      <button className="button-quick-form" onClick={this.displayAddNote}>{!this.state.display ? 'Add a Note' : 'Cancel'}</button>


   </div>

     <div className="view-notes-container-add-note">
       <MostRecentNote history={this.props.history}  onSubmit={this.onSubmit} />

       <AddNote history={this.props.history} title={this.props.match.params.title}/>
      </div>

     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewNotes)
