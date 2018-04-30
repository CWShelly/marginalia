import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from './AddNote'
import NoteList from './NoteList'

const ViewNotes = (props)=>{
 
  console.log(props.match.params.title);
return(
  <div>
  Viewing notes for {props.match.params.title}.
  <NoteList />
  <AddNote />
  </div>
)

}


 export default ViewNotes
