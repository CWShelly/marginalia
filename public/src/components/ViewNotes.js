import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';
import MostRecentNote from './MostRecentNote';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListFilters from './ListFilters'

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
console.log(this.props);
  return(
    <div className="container">
    <div> <h1 >Your Notes for {this.state.title}</h1>
        <ListFilters history={this.props.history}/>

    <p className="add-note-view-notes">

    <Link className="add-note-view-notes-link"
    to={`/chapter/${this.state.title}/${localStorage.getItem('book_id')}`}>
    Add a note <i className="fa fa-plus"></i>
    </Link>

    </p>

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
