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
    title: localStorage.getItem('title')
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
    <div className="container">
    <h1 >Your Notes for {this.state.title}</h1>
    <NoteList />
     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewNotes)
