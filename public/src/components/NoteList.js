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

  const json = localStorage.getItem('notes')
  const notes = JSON.parse(json);
  const book_id = localStorage.getItem('book_id');
  console.log(book_id);

console.log(state.notes);

    if(notes && state.notes.length == 0){

   console.log('notes');
        const hasBookId=(note)=>{
          // console.log(note.book_id);
          return note.book_id === book_id;
        }

     const notes_of_this_book = notes.filter(hasBookId);

     // console.log(notes_in_this_book);
        // const notes_of_this_book = notes;

      return {
        notes: notes_of_this_book.concat(state.notes)
      }
    }
    else if(notes && state.notes.length >0){

      console.log('notes and state');

      const hasBookId=(note)=>{
        return note.book_id === book_id;
      }

      console.log(state.notes.length);
      console.log(state.notes[state.notes.length-1]);

   const notes_of_this_book = notes.filter(hasBookId);

   const state_of_this_book = state.notes.filter(hasBookId)
   // const notes_of_this_book = notes;

      console.log(notes_of_this_book.length);

   if(notes_of_this_book.length >0 && state_of_this_book.length > 0
      && notes_of_this_book[notes_of_this_book.length-1].id ===
     state_of_this_book[state_of_this_book.length-1].id)
     {

  console.log('yes');
  return {
    notes: notes_of_this_book
  }
}
else{
    console.log('no');
    console.log(state_of_this_book.length);
 console.log(state_of_this_book[state_of_this_book.length-1]);
   if(state_of_this_book.length >0){

     return {
       notes: notes_of_this_book.concat([state_of_this_book[state_of_this_book.length-1]])
     }
   }
   else{
     return{
       notes: notes_of_this_book
     }
   }

   }
}




  else{
    console.log(' no notes');
    console.log(state.notes);

    return {
      notes:state.notes

    }
  }

}


export default connect(mapStateToProps)(NoteList);
