import React, { Fragment } from 'react';
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

console.log(this.state.auth_id === localStorage.getItem('browse_id'));
  return(
    <div className="row no-gutters">



                <div className="col-sm-12 ml-1 col-md-6">
                    <h1>My Notes for {this.state.title}</h1>
                 {
                   this.state.auth_id === localStorage.getItem('browse_id')
                   && <AddNote history={this.props.history}/>
                }
               </div>


       <div className="col-sm-12 col-md-5">
              <div className="mb-4">
                  <ListFilters history={this.props.history}/>
              </div>

              <div>
            <NoteList className="note-list" history={this.props.history} />
            </div>

             </div>

  </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewNotes)
