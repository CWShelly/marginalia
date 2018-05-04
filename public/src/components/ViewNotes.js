import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from './AddNote';
import NoteList from './NoteList';
import MostRecentNote from './MostRecentNote';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';

export class ViewNotes extends React.Component{
  componentDidMount(){
    console.log('view notes mounted');
  }

componentWillReceiveProps(nextProps){
console.log('will receive props');
}

  onSubmit=(note)=>{
   console.log(this.props);
     this.props.startAddNote(note);

     this.props.history.push(`/viewNotes/${this.props.match.params.title}`)
      // this.props.history.push(`${this.props.match.path}`)

  }

render(){
    console.log(this.props);
  return(
    <div>
    Viewing notes for {this.props.match.params.title}.
    <MostRecentNote history={this.props.history}  onSubmit={this.onSubmit} />
    <NoteList history={this.props.history}  />
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
