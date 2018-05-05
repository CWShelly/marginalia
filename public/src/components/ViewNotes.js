import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';
import MostRecentNote from './MostRecentNote';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';


export class ViewNotes extends React.Component{

  // componentDidMount(){
  //   console.log('mounted');
  //   let author_first_name =  localStorage.getItem('author_first');
  //   let author_name_name =  localStorage.getItem('author_last');
  // }

  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last')

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
    <div className="container view-notes-container">
    <p className="view-notes-title">Notes for {this.props.match.params.title} by {this.state.author_first_name} {this.state.author_last_name} </p>
    <MostRecentNote history={this.props.history}  onSubmit={this.onSubmit} />

        <p className="view-notes-title"> {this.props.match.params.title} by {this.state.author_first_name} {this.state.author_last_name}.</p>
    <NoteList history={this.props.history}  />

    <button className="button-quick-form" onClick={this.displayAddNote}>{!this.state.display ? 'Add a Note' : 'Cancel'}</button>

    {this.state.display &&   <AddNote history={this.props.history} title={this.props.match.params.title}/>}
   </div>
    </div>
  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddNote: (note)=> dispatch(startAddNote(note))
})


export default connect(undefined, mapDispatchToProps)(ViewNotes)
