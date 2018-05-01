import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import selectNotes from '../selectors/notes';

export class NoteList extends React.Component{

  componentDidUpdate(nextProps){
    console.log(this.props);
    console.log('updated note list');
      const json = JSON.stringify(this.props.notes);
      localStorage.setItem('notes', json);
 }

  render(){
    return(
      <div>
       <h1>Note List</h1>

       {this.props.notes.map((note, index)=>{
         return <NoteListItem key={note.id} { ...note} index={index}/>
       })}
       </div>

    )
  }
}



const mapStateToProps = (state)=>{
  console.log(state);
  const json = localStorage.getItem('notes')
  const notes = JSON.parse(json);



    if(notes){
      console.log('notes');
      const book_id = localStorage.getItem('book_id');

        const hasBookId=(note)=>{
          return note.book_id === book_id;
        }

     const notes_of_this_book = notes.filter(hasBookId)
     console.log(notes_of_this_book);

 
      return {
        notes: notes.concat(state.notes)
      }
    }


  else{

    return {
      notes:state.notes

    }
  }

}


export default connect(mapStateToProps)(NoteList);
