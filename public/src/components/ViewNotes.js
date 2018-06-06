import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListFilters from './ListFilters'

export class ViewNotes extends React.Component{

  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title'),
    auth_id:localStorage.getItem('auth_id')
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
console.log(this.state.auth_id);
console.log(localStorage.getItem('browse_id'));
console.log(this.state.auth_id === localStorage.getItem('browse_id'));
  return(
    <div className="container">
    <div> <h1 >My Notes for {this.state.title}</h1>

    <div className="view">

   {this.state.auth_id === localStorage.getItem('browse_id') && <AddNote history={this.props.history}/>}
    </div>

    </div>

    <div>
        <ListFilters history={this.props.history}/>
    </div>
    <NoteList history={this.props.history} />
     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewNotes)
